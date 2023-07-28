export interface ICandidate {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  isNew: boolean; 
  isShortlist: boolean;
  isStandby: boolean;
  isProposal: boolean;
  isEliminated: boolean;
  isHr_interview: boolean;
  isLeader_interview: boolean;
  isHead_interview: boolean;
  isTeam_interview: boolean;
}

export class Candidate implements ICandidate {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string,
    public isNew: boolean,
    public isShortlist: boolean,
    public isStandby: boolean,
    public isProposal: boolean,
    public isEliminated: boolean,
    public isHr_interview: boolean,
    public isLeader_interview: boolean,
    public isHead_interview: boolean,
    public isTeam_interview: boolean
  ) {}
}
