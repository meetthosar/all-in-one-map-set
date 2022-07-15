'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    price: UInt,
    deadline: UInt,
    ready: Fun([], Null),
    proposeOffer : Fun([],Tuple(Token, UInt))
  });

  const Applicant = API('Applicant', {
    applyTheOffer: Fun([Address], Bool),
    timesUp: Fun([], Bool),
  });
  init();

  Deployer.only(() => {
    const [token, numOfParticipants] = declassify(interact.proposeOffer());
    const deadline = declassify(interact.deadline);
    check(numOfParticipants != 0)
  });
  Deployer.publish(token, numOfParticipants, deadline);
  commit();

  Deployer.pay([[numOfParticipants, token ]]);
  // Deployer.interact.ready();

  const deadlineBlock = relativeTime(deadline);
  const applicantSets = new Set();

  const [ howMany, accepted ] =
    parallelReduce([0, numOfParticipants])
    // .invariant(balance(token) ==  price)
    .invariant(applicantSets.Map.size() == howMany)
    .while( howMany < accepted  )
  
    .api_(Applicant.applyTheOffer, (who) => {
      check( this == Deployer, "you are the boss");
      check( applicantSets.member(who), "yep" );
      return [ 0, (k) => {
        k(true);
        applicantSets.insert(who);
        transfer(1, token).to(who);
        // token.burn(price);
        return [ howMany +1, accepted ];
      }];
    })
    .timeout( deadlineBlock, () => {
      const [ [], k ] = call(Applicant.timesUp);
      k(true);
      return [ howMany, accepted ]
    });
  // const leftovers = howMany;
  transfer(numOfParticipants-howMany, token).to(Deployer);
  commit();
  exit();
});