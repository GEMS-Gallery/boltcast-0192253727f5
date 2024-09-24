export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Visit = IDL.Record({ 'timestamp' : Time, 'userAgent' : IDL.Text });
  return IDL.Service({
    'getTotalVisits' : IDL.Func([], [IDL.Nat], ['query']),
    'getVisits' : IDL.Func([], [IDL.Vec(Visit)], ['query']),
    'logVisit' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
