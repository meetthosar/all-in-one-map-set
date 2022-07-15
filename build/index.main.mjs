// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Applicant_applyTheOffer4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Applicant_applyTheOffer4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Applicant_applyTheOffer4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v364, v365, v385, v387] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v400 = ctc.selfAddress();
  const v402 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
    msg: 'in',
    who: 'Applicant_applyTheOffer'
    });
  const v403 = v402[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v405 = stdlib.addressEq(v400, v364);
  stdlib.assert(v405, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
    msg: 'you are the boss',
    who: 'Applicant_applyTheOffer'
    });
  const v407 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v403), null);
  let v408;
  switch (v407[0]) {
    case 'None': {
      const v409 = v407[1];
      v408 = false;
      
      break;
      }
    case 'Some': {
      const v410 = v407[1];
      v408 = true;
      
      break;
      }
    }
  stdlib.assert(v408, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
    msg: 'yep',
    who: 'Applicant_applyTheOffer'
    });
  
  let v419;
  switch (v407[0]) {
    case 'None': {
      const v420 = v407[1];
      v419 = false;
      
      break;
      }
    case 'Some': {
      const v421 = v407[1];
      v419 = true;
      
      break;
      }
    }
  stdlib.assert(v419, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
    msg: 'yep',
    who: 'Applicant_applyTheOffer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v364, v365, v385, v387, v402],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v424], secs: v426, time: v425, didSend: v260, from: v423 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Applicant_applyTheOffer"
        });
      const v428 = v424[stdlib.checkedBigNumberify('./index.rsh:37:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v428), null);
      ;
      const v445 = true;
      const v446 = await txn1.getOutput('Applicant_applyTheOffer', 'v445', ctc5, v445);
      
      await stdlib.simMapSet(sim_r, 0, v428, null);
      const v584 = v387;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v424], secs: v426, time: v425, didSend: v260, from: v423 } = txn1;
  undefined /* setApiDetails */;
  const v428 = v424[stdlib.checkedBigNumberify('./index.rsh:37:10:spread', stdlib.UInt_max, '0')];
  const v429 = stdlib.addressEq(v423, v364);
  stdlib.assert(v429, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
    msg: 'you are the boss',
    who: 'Applicant_applyTheOffer'
    });
  const v431 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v428), null);
  let v432;
  switch (v431[0]) {
    case 'None': {
      const v433 = v431[1];
      v432 = false;
      
      break;
      }
    case 'Some': {
      const v434 = v431[1];
      v432 = true;
      
      break;
      }
    }
  stdlib.assert(v432, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
    msg: 'yep',
    who: 'Applicant_applyTheOffer'
    });
  ;
  let v440;
  switch (v431[0]) {
    case 'None': {
      const v441 = v431[1];
      v440 = false;
      
      break;
      }
    case 'Some': {
      const v442 = v431[1];
      v440 = true;
      
      break;
      }
    }
  stdlib.assert(v440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:23:application call to [unknown function] (defined at: ./index.rsh:40:23:function exp)'],
    msg: 'yep',
    who: 'Applicant_applyTheOffer'
    });
  const v445 = true;
  const v446 = await txn1.getOutput('Applicant_applyTheOffer', 'v445', ctc5, v445);
  if (v260) {
    stdlib.protect(ctc0, await interact.out(v424, v446), {
      at: './index.rsh:37:11:application',
      fs: ['at ./index.rsh:37:11:application call to [unknown function] (defined at: ./index.rsh:37:11:function exp)', 'at ./index.rsh:41:10:application call to "k" (defined at: ./index.rsh:40:23:function exp)', 'at ./index.rsh:40:23:application call to [unknown function] (defined at: ./index.rsh:40:23:function exp)'],
      msg: 'out',
      who: 'Applicant_applyTheOffer'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v428, null);
  const v584 = v387;
  return;
  
  
  
  };
export async function _Applicant_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Applicant_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Applicant_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v364, v365, v385, v387] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v456 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:49:7:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:48:33:application call to [unknown function] (defined at: ./index.rsh:48:33:function exp)'],
    msg: 'in',
    who: 'Applicant_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v364, v365, v385, v387, v456],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v458], secs: v460, time: v459, didSend: v323, from: v457 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Applicant_timesUp"
        });
      ;
      const v461 = true;
      const v462 = await txn1.getOutput('Applicant_timesUp', 'v461', ctc5, v461);
      
      const v591 = stdlib.mul(v387, v365);
      sim_r.txns.push({
        kind: 'from',
        to: v364,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v458], secs: v460, time: v459, didSend: v323, from: v457 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v461 = true;
  const v462 = await txn1.getOutput('Applicant_timesUp', 'v461', ctc5, v461);
  stdlib.protect(ctc0, await interact.out(v458, v462), {
    at: './index.rsh:49:7:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:50:8:application call to "k" (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:48:33:application call to [unknown function] (defined at: ./index.rsh:48:33:function exp)'],
    msg: 'out',
    who: 'Applicant_timesUp'
    });
  
  const v591 = stdlib.mul(v387, v365);
  ;
  return;
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v355 = stdlib.protect(ctc2, interact.deadline, 'for Deployer\'s interact field deadline');
  
  const v359 = stdlib.protect(ctc3, await interact.proposeOffer(), {
    at: './index.rsh:19:73:application',
    fs: ['at ./index.rsh:18:16:application call to [unknown function] (defined at: ./index.rsh:18:20:function exp)'],
    msg: 'proposeOffer',
    who: 'Deployer'
    });
  const v360 = v359[stdlib.checkedBigNumberify('./index.rsh:19:73:application', stdlib.UInt_max, '0')];
  const v361 = v359[stdlib.checkedBigNumberify('./index.rsh:19:73:application', stdlib.UInt_max, '1')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v360, v361, v355],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v365, v366, v367], secs: v369, time: v368, didSend: v35, from: v364 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v365, v366, v367], secs: v369, time: v368, didSend: v35, from: v364 } = txn1;
  ;
  const v370 = stdlib.mul(v365, v366);
  
  const txn2 = await (ctc.sendrecv({
    args: [v364, v365, v366, v367, v368],
    evt_cnt: 0,
    funcNum: 1,
    lct: v368,
    onlyIf: true,
    out_tys: [],
    pay: [v370, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v373, time: v372, didSend: v44, from: v371 } = txn2;
      
      const v374 = stdlib.mul(v365, v366);
      sim_r.txns.push({
        amt: v374,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v385 = stdlib.add(v368, v367);
      const v387 = v366;
      const v388 = true;
      const v389 = v372;
      
      if (await (async () => {
        
        return v388;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v468 = stdlib.mul(v387, v365);
        sim_r.txns.push({
          kind: 'from',
          to: v364,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v373, time: v372, didSend: v44, from: v371 } = txn2;
  const v374 = stdlib.mul(v365, v366);
  ;
  const v377 = stdlib.addressEq(v364, v371);
  stdlib.assert(v377, {
    at: './index.rsh:25:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:26:26:application',
    fs: ['at ./index.rsh:26:26:application call to [unknown function] (defined at: ./index.rsh:26:26:function exp)', 'at ./index.rsh:26:26:application call to "liftedInteract" (defined at: ./index.rsh:26:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v385 = stdlib.add(v368, v367);
  let v387 = v366;
  let v388 = true;
  let v389 = v372;
  
  while (await (async () => {
    
    return v388;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: ['time', v385],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v458], secs: v460, time: v459, didSend: v323, from: v457 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v461 = true;
      await txn4.getOutput('Applicant_timesUp', 'v461', ctc6, v461);
      const cv387 = v387;
      const cv388 = false;
      const cv389 = v459;
      
      v387 = cv387;
      v388 = cv388;
      v389 = cv389;
      
      continue;
      }
    else {
      const {data: [v424], secs: v426, time: v425, didSend: v260, from: v423 } = txn3;
      undefined /* setApiDetails */;
      const v428 = v424[stdlib.checkedBigNumberify('./index.rsh:37:10:spread', stdlib.UInt_max, '0')];
      const v429 = stdlib.addressEq(v423, v364);
      stdlib.assert(v429, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
        msg: 'you are the boss',
        who: 'Deployer'
        });
      const v431 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v428), null);
      let v432;
      switch (v431[0]) {
        case 'None': {
          const v433 = v431[1];
          v432 = false;
          
          break;
          }
        case 'Some': {
          const v434 = v431[1];
          v432 = true;
          
          break;
          }
        }
      stdlib.assert(v432, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:39:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)', 'at ./index.rsh:37:42:application call to [unknown function] (defined at: ./index.rsh:37:42:function exp)'],
        msg: 'yep',
        who: 'Deployer'
        });
      ;
      let v440;
      switch (v431[0]) {
        case 'None': {
          const v441 = v431[1];
          v440 = false;
          
          break;
          }
        case 'Some': {
          const v442 = v431[1];
          v440 = true;
          
          break;
          }
        }
      stdlib.assert(v440, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:39:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:23:application call to [unknown function] (defined at: ./index.rsh:40:23:function exp)'],
        msg: 'yep',
        who: 'Deployer'
        });
      const v445 = true;
      await txn3.getOutput('Applicant_applyTheOffer', 'v445', ctc6, v445);
      await stdlib.mapSet(map0, v428, null);
      const cv387 = v387;
      const cv388 = true;
      const cv389 = v425;
      
      v387 = cv387;
      v388 = cv388;
      v389 = cv389;
      
      continue;}
    
    }
  const v468 = stdlib.mul(v387, v365);
  ;
  return;
  
  
  
  
  };
export async function Applicant_applyTheOffer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Applicant_applyTheOffer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Applicant_applyTheOffer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Applicant_applyTheOffer4(ctcTop, interact);}
  };
export async function Applicant_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Applicant_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Applicant_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Applicant_timesUp4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Applicant_applyTheOffer(address)byte`, `Applicant_timesUp()byte`],
    pure: [],
    sigs: [`Applicant_applyTheOffer(address)byte`, `Applicant_timesUp()byte`]
    },
  appApproval: `BiAIAAEEKCAwCPTb3/0KJgMBAAABASI1ADEYQQKjKWRJIls1ASEGWzUCMRkjEkEACDEAKChmQgJxNhoAF0lBACMiNQQjNQZJIQcMQAAIIQcSRClCACuBhu7OkQcSRDYaAUIAcjYaAhc1BDYaAzYaARdJgQMMQAD2SSQMQABXJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/0k1BTX+gATU4BgtNP5QsDIGNP8PRIAJAAAAAAAAAc0BsCo1BzQDVwAgNAMhBFs0/zQDIQVbIjIGQgFVSCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf5JNQU1/YAE+aYh6TT9ULAyBjT+DEQ0/TX8MQA0/xJENPyIAcZJNfsiVUAABiI1+kIABiM1+kIAADT6RDT7IlVAAAYiNflCAAYjNflCAAA0+USACQAAAAAAAAG9AbAqNQc0/CgqZjT/NAMhBFs0/jQDIQVbIzIGQgC8SSMMQABUIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+JVs1/YAEmouRdLA0/jT9C4gBQTT/MQASRDT/NP40A4E4WzQDIQVbCDT9IzIGQgBiSIGgjQaIARwiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQZbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULAxADT/FlA0/hZQNP0WUDIGFlAoSwFXAEBnSCM1ATIGNQJCAGM1/zX+Nf01/DX7Nfo0/kEAIDT6NPsWUDT8FlA0/RZQKEsBVwA4Z0gkNQEyBjUCQgAysSKyATT9NPsLsggjshA0+rIHs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v365",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v367",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v365",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v367",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v424",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v458",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v445",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v461",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Applicant_applyTheOffer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Applicant_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v424",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v458",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200153a3803806200153a833981016040819052620000269162000285565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200017e565b620000d16040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b33815260208083018051518284015280518201516040808501919091529051810151606084015243608084018190526001600081905555516200014f9183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b6040516020818303038152906040526002908051906020019062000175929190620001a8565b50505062000359565b81620001a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b6906200031c565b90600052602060002090601f016020900481019282620001da576000855562000225565b82601f10620001f557805160ff191683800117855562000225565b8280016001018555821562000225579182015b828111156200022557825182559160200191906001019062000208565b506200023392915062000237565b5090565b5b8082111562000233576000815560010162000238565b604051606081016001600160401b03811182821017156200027f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029957600080fd5b604080519081016001600160401b0381118282101715620002ca57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002e457600080fd5b620002ee6200024e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200033157607f821691505b602082108114156200035357634e487b7160e01b600052602260045260246000fd5b50919050565b6111d180620003696000396000f3fe6080604052600436106100845760003560e01c806383230757116100565780638323075714610109578063a98bf2231461011e578063ab53f2c614610131578063c2d7599514610154578063d52e85c61461016757005b80631e93b0f11461008d5780632c10a159146100b15780633bc5b7bf146100c457806350d4e16c146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610d9c565b61017a565b3480156100d057600080fd5b506100e46100df366004610dd4565b6101aa565b6040516100a89190610e07565b6100f96101c1565b60405190151581526020016100a8565b34801561011557600080fd5b5060015461009e565b61008b61012c366004610d9c565b6101fc565b34801561013d57600080fd5b50610146610228565b6040516100a8929190610e4e565b6100f9610162366004610dd4565b6102c5565b61008b610175366004610d9c565b61030a565b60408051808201909152600080825260208201526101a66101a036849003840184610f23565b82610336565b5050565b6101b2610bdc565b6101bb826104f5565b92915050565b60006101cb610bff565b60208082015160009081905260408051808201909152818152918201526101f282826105b9565b6020015192915050565b60408051808201909152600080825260208201526101a661022236849003840184610f59565b826105b9565b60006060600054600280805461023d90610fb1565b80601f016020809104026020016040519081016040528092919081815260200182805461026990610fb1565b80156102b65780601f1061028b576101008083540402835291602001916102b6565b820191906000526020600020905b81548152906001019060200180831161029957829003601f168201915b50505050509050915091509091565b60006102cf610c2e565b602080820151516001600160a01b0385169052604080518082019091526000808252918101919091526103028282610780565b519392505050565b60408051808201909152600080825260208201526101a661033036849003840184610fe6565b82610780565b610346600160005414600a610a7c565b815161036190158061035a57508251600154145b600b610a7c565b60008080556002805461037390610fb1565b80601f016020809104026020016040519081016040528092919081815260200182805461039f90610fb1565b80156103ec5780601f106103c1576101008083540402835291602001916103ec565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b5050505050806020019051810190610404919061104a565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161046f8160400151826020015161046691906110e7565b34146008610a7c565b8051610487906001600160a01b031633146009610a7c565b61048f610c5b565b815181516001600160a01b039091169052602080830151825190910152606082015160808301516104c09190611106565b81516040908101919091528281015160208084018051929092528151600191015251439101526104ef81610aa1565b50505050565b6104fd610bdc565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561052c5761052c610df1565b14156105a9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561056d5761056d610df1565b600181111561057e5761057e610df1565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6105c96004600054146014610a7c565b81516105e49015806105dd57508251600154145b6015610a7c565b6000808055600280546105f690610fb1565b80601f016020809104026020016040519081016040528092919081815260200182805461062290610fb1565b801561066f5780601f106106445761010080835404028352916020019161066f565b820191906000526020600020905b81548152906001019060200180831161065257829003601f168201915b5050505050806020019051810190610687919061111e565b905061069b81604001514310156016610a7c565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a16106ef34156013610a7c565b604051600181527fc83ac1c62fcd798b3a93d7a3982771f31edc49e91c74cc15bdfa09d8bfaa3dc59060200160405180910390a160016020830152610732610c5b565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060840151828401805191909152805160009301929092529051439101526104ef81610aa1565b6107906004600054146010610a7c565b81516107ab9015806107a457508251600154145b6011610a7c565b6000808055600280546107bd90610fb1565b80601f01602080910402602001604051908101604052809291908181526020018280546107e990610fb1565b80156108365780601f1061080b57610100808354040283529160200191610836565b820191906000526020600020905b81548152906001019060200180831161081957829003601f168201915b505050505080602001905181019061084e919061111e565b9050610858610ca2565b610869826040015143106012610a7c565b60408051338152855160208083019190915286015151516001600160a01b03168183015290517f2cdc6e5ad1aaded7f9f9abf5788bfa4ab32fca52c66174a250e955e90d4c04159181900360600190a181516108d1906001600160a01b03163314600c610a7c565b602084015151516108e1906104f5565b8152600081515160018111156108f9576108f9610df1565b141561090b576000602082015261092f565b6001815151600181111561092157610921610df1565b141561092f57600160208201525b61093e8160200151600d610a7c565b61094a3415600e610a7c565b6000815151600181111561096057610960610df1565b14156109725760006040820152610996565b6001815151600181111561098857610988610df1565b141561099657600160408201525b6109a58160400151600f610a7c565b604051600181527fdacc1358516eeb06a3199f570794c2ae0f733fcc1893b4553d1c1832e1175f149060200160405180910390a160018084526020858101805151516001600160a01b03908116600090815260049093526040808420805460ff19169095179094559051515116815220805462ff000019169055610a27610c5b565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606085015182840180519190915280516001930192909252905143910152610a7581610aa1565b5050505050565b816101a65760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516020015115610b7157610ae3604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815284516040908101518186019081528387015151606080880191825260046000554360015583519586019690965292519184019190915251928201929092529051608082015260a00160405160208183030381529060405260029080519060200190610b6c929190610cb5565b505050565b8051805160209182015191830151516001600160a01b03909116916108fc91610b9a91906110e7565b6040518115909202916000818181858888f19350505050158015610bc2573d6000803e3d6000fd5b5060008080556001819055610bd990600290610d39565b50565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001610c2960405180602001604052806000151581525090565b905290565b604051806040016040528060008152602001610c2960408051808201909152600060208201908152815290565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b6040518060600160405280610beb610bdc565b828054610cc190610fb1565b90600052602060002090601f016020900481019282610ce35760008555610d29565b82601f10610cfc57805160ff1916838001178555610d29565b82800160010185558215610d29579182015b82811115610d29578251825591602001919060010190610d0e565b50610d35929150610d6f565b5090565b508054610d4590610fb1565b6000825580601f10610d55575050565b601f016020900490600052602060002090810190610bd991905b5b80821115610d355760008155600101610d70565b600060408284031215610d9657600080fd5b50919050565b600060408284031215610dae57600080fd5b610db88383610d84565b9392505050565b6001600160a01b0381168114610bd957600080fd5b600060208284031215610de657600080fd5b8135610db881610dbf565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610e2c57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610e8257858101830151858201606001528201610e66565b81811115610e94576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff81118282101715610edc57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610edc57634e487b7160e01b600052604160045260246000fd5b803580151581146105b457600080fd5b600060408284031215610f3557600080fd5b610f3d610eab565b82358152610f4d60208401610f13565b60208201529392505050565b60008183036040811215610f6c57600080fd5b610f74610eab565b833581526020601f1983011215610f8a57600080fd5b610f92610ee2565b9150610fa060208501610f13565b825260208101919091529392505050565b600181811c90821680610fc557607f821691505b60208210811415610d9657634e487b7160e01b600052602260045260246000fd5b60008183036040811215610ff957600080fd5b611001610eab565b833581526020601f198301121561101757600080fd5b61101f610ee2565b9150611029610ee2565b602085013561103781610dbf565b8152825260208101919091529392505050565b600060a0828403121561105c57600080fd5b60405160a0810181811067ffffffffffffffff8211171561108d57634e487b7160e01b600052604160045260246000fd5b604052825161109b81610dbf565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611101576111016110d1565b500290565b60008219821115611119576111196110d1565b500190565b60006080828403121561113057600080fd5b6040516080810181811067ffffffffffffffff8211171561116157634e487b7160e01b600052604160045260246000fd5b604052825161116f81610dbf565b80825250602083015160208201526040830151604082015260608301516060820152809150509291505056fea2646970667358221220f82dfb8f13cc66f9f0e3ed7c0955f8012b6e2de66c21f66f42263c394424316664736f6c634300080c0033`,
  BytecodeLen: 5434,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:32:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Applicant_applyTheOffer": Applicant_applyTheOffer,
  "Applicant_timesUp": Applicant_timesUp,
  "Deployer": Deployer
  };
export const _APIs = {
  Applicant: {
    applyTheOffer: Applicant_applyTheOffer,
    timesUp: Applicant_timesUp
    }
  };
