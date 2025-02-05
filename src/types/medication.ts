export type MedicationRequest = {
  resourceType: "MedicationRequest";
  id: string;
  identifier: {
    use: string;
    system: string;
    value: string;
  }[];
  status: string;
  intent: string;
  category?: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text: string;
  }[];
  medicationReference: {
    reference: string;
    display: string;
  };
  subject: {
    reference: string;
    display: string;
  };
  encounter?: {
    reference: string;
    identifier?: {
      use: string;
      system: string;
      value: string;
    };
    display?: string;
  };
  authoredOn?: string;
  requester?: {
    reference: string;
    type?: string;
    display: string;
  };
  recorder?: {
    reference: string;
    type?: string;
    display: string;
  };
  reasonCode?: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text: string;
  }[];
  courseOfTherapyType?: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text: string;
  };
  dosageInstruction?: {
    text: string;
    patientInstruction?: string;
    timing?: {
      repeat?: {
        boundsPeriod?: {
          start: string;
        };
        count?: number;
        timeOfDay?: string[];
      };
      code?: {
        text: string;
      };
    };
    asNeededBoolean?: boolean;
    route?: {
      coding: {
        system: string;
        code: string;
        display: string;
      }[];
      text: string;
    };
    method?: {
      coding: {
        system: string;
        code: string;
        display: string;
      }[];
      text: string;
    };
    doseAndRate?: {
      type: {
        coding: {
          system: string;
          code: string;
          display: string;
        }[];
        text: string;
      };
      doseQuantity: {
        value: number;
        unit: string;
        system: string;
        code: string;
      };
    }[];
  }[];
  dispenseRequest?: {
    validityPeriod?: {
      start: string;
    };
    numberOfRepeatsAllowed?: number;
    quantity?: {
      value: number;
      unit: string;
    };
    expectedSupplyDuration?: {
      value: number;
      unit: string;
      system: string;
      code: string;
    };
  };
};

export type OperationOutcome = {
  resourceType: "OperationOutcome";
  issue: {
    severity: string;
    code: string;
    details: {
      coding: {
        system: string;
        code: string;
        display: string;
      }[];
      text: string;
    };
  }[];
};

export type MedicationRequestEntry = {
  fullUrl: string;
  resource: MedicationRequest | OperationOutcome;
  search: {
    mode: "match" | "outcome";
  };
  link?: {
    relation: string;
    url: string;
  }[];
};

export type MedicationRequestBundle = {
  resourceType: "Bundle";
  type: "searchset";
  total: number;
  link: {
    relation: string;
    url: string;
  }[];
  entry: MedicationRequestEntry[];
};
