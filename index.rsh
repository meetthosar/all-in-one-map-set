'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    deadline: UInt,
    ready: Fun([], Null),
    proposeOffer : Fun([],Tuple(Token, UInt))
  });

  const Applicant = API('Applicant', {
    applyTheOffer: Fun([], Bool),
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
  // commit();
   
  const deadlineBlock = relativeTime(deadline);
  const applicantSets = new Set();

  const [ howMany ] =
    parallelReduce([numOfParticipants])
    .invariant(balance(token) ==  howMany)
    // .invariant(applicantSets.Map.size() == howMany)
    .while( howMany > 0  )
    .api_(Applicant.applyTheOffer, () => {
      check( this == Deployer, "you are the boss");
      check( !applicantSets.member(this), "yep" );
    
      return [ (k) => {
        k(true);
        applicantSets.insert(this);
        transfer(1, token).to(this);
        
        return [ howMany - 1 ];
      }];
    })
    .timeout( deadlineBlock, () => {
      const [ [], k ] = call(Applicant.timesUp);
      k(true);
      return [ howMany ]
    }); 
  
  transfer(howMany, token).to(Deployer);
  commit();
  exit();
});