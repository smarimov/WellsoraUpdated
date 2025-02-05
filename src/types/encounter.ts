export type Encounter = {
  resourceType: "Encounter";
  id: string;
  identifier: {
    use: string;
    system: string;
    value: string;
  }[];
  status: string;
  class: {
    system: string;
    code: string;
    display: string;
  };
  type?: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text: string;
  }[];
  serviceType?: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text: string;
  };
  subject: {
    reference: string;
    display: string;
  };
  participant?: {
    type?: {
      coding: {
        system: string;
        code: string;
        display: string;
      }[];
      text: string;
    }[];
    individual?: {
      reference: string;
      type?: string;
      display: string;
    };
    period?: {
      start: string;
      end?: string;
    };
    extension?: {
      valueCodeableConcept: {
        coding: {
          system: string;
          code: string;
          display: string;
        }[];
        text: string;
      };
      url: string;
    }[];
  }[];
  period?: {
    start: string;
    end?: string;
  };
  account?: {
    identifier: {
      system: string;
      value: string;
    };
    display: string;
  }[];
  location?: {
    location: {
      reference: string;
      display: string;
    };
    period?: {
      start: string;
      end?: string;
    };
  }[];
  serviceProvider?: {
    reference: string;
    display: string;
  };
  hospitalization?: {
    extension?: {
      valueDateTime: string;
      url: string;
    }[];
  };
  partOf?: {
    reference: string;
    identifier?: {
      use: string;
      system: string;
      value: string;
    };
    display: string;
  };
};

export type FHIRBundle = {
  resourceType: "Bundle";
  type: "searchset";
  total: number;
  link: {
    relation: string;
    url: string;
  }[];
  entry: {
    link: {
      relation: string;
      url: string;
    }[];
    fullUrl: string;
    resource: Encounter;
    search: {
      mode: string;
    };
  }[];
};
