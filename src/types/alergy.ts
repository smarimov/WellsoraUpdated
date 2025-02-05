export type AllergyIntoleranceResponse = {
  resourceType: "Bundle";
  type: string;
  total: number;
  link: Link[];
  entry: Entry[];
};

export type Link = {
  relation: string;
  url: string;
};

export type Entry = {
  link?: Link[];
  fullUrl: string;
  resource: AllergyIntolerance | OperationOutcome;
  search?: {
    mode: string;
  };
};

export type AllergyIntolerance = {
  resourceType: "AllergyIntolerance";
  id: string;
  clinicalStatus?: CodingSystem;
  verificationStatus?: CodingSystem;
  code?: Code;
  patient: Reference;
};

export type OperationOutcome = {
  resourceType: "OperationOutcome";
  issue: Issue[];
};

export type Issue = {
  severity: string;
  code: string;
  details?: Coding;
};

export type CodingSystem = {
  coding: Coding[];
};

export type Coding = {
  system: string;
  version?: string;
  code: string;
  display: string;
  text?: string;
};

export type Reference = {
  reference: string;
  display: string;
};

export type Code = {
  coding: Coding[];
  text?: string;
};
