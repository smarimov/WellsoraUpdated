export const recordData = {
  resourceType: "Bundle",
  type: "searchset",
  total: 10,
  link: [
    {
      relation: "self",
      url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter?patient=erXuFYUfucBZaryVksYEcMg3",
    },
  ],
  entry: [
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eoK8nLRcEypNjtns4dgnF3Q3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eoK8nLRcEypNjtns4dgnF3Q3",
      resource: {
        resourceType: "Encounter",
        id: "eoK8nLRcEypNjtns4dgnF3Q3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29547",
          },
        ],
        status: "planned",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "2",
          display: "Preadmission",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.10110",
                code: "108",
                display: "Surgery Admit",
              },
            ],
            text: "Surgery Admit",
          },
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "3",
                display: "Hospital Encounter",
              },
            ],
            text: "Hospital Encounter",
          },
        ],
        serviceType: {
          coding: [
            {
              system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.18886",
              code: "124",
              display: "General Surgery",
            },
          ],
          text: "General Surgery",
        },
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "ADM",
                    display: "admitter",
                  },
                ],
                text: "admitter",
              },
            ],
            individual: {
              reference: "Practitioner/eOyFJ.PiGBcbhr3T1oyJZ1A3",
              type: "Practitioner",
              display: "Physician Surgery, MD",
            },
          },
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "ATND",
                    display: "attender",
                  },
                ],
                text: "attender",
              },
            ],
            individual: {
              reference: "Practitioner/eOyFJ.PiGBcbhr3T1oyJZ1A3",
              type: "Practitioner",
              display: "Physician Surgery, MD",
            },
          },
          {
            extension: [
              {
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "urn:oid:1.2.840.114350.1.13.0.1.7.4.698084.18832",
                      code: "11",
                      display: "General Surgery",
                    },
                  ],
                  text: "General Surgery",
                },
                url: "http://open.epic.com/FHIR/StructureDefinition/extension/specialty",
              },
            ],
            type: [
              {
                coding: [
                  {
                    system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.18869",
                    code: "Surgeon",
                    display: "Surgeon",
                  },
                ],
                text: "Surgeon",
              },
            ],
            period: {
              start: "2023-06-06T15:10:24Z",
            },
            individual: {
              reference: "Practitioner/eOyFJ.PiGBcbhr3T1oyJZ1A3",
              type: "Practitioner",
              display: "Physician Surgery, MD",
            },
          },
        ],
        period: {
          start: "2023-06-06T16:20:00Z",
        },
        account: [
          {
            identifier: {
              system: "urn:oid:1.2.840.114350.1.13.0.1.7.2.726582",
              value: "1000502",
            },
            display: "LOPEZ,CAMILA MARIA",
          },
        ],
        location: [
          {
            location: {
              reference:
                "Location/eih1L3clnoL-Odea34LokKYlHPndLwGjYudOa4y6QHvk3",
              display: "EMH Main Operating Room",
            },
          },
          {
            location: {
              reference:
                "Location/eih1L3clnoL-Odea34LokKYlHPndLwGjYudOa4y6QHvk3",
              display: "EMH Main Operating Room",
            },
          },
          {
            location: {
              reference: "Location/eQSOrLdbVrMRc68KBcTBG4A3",
              display: "Epic Hospital System",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eGmO0h.1.UQQrExl4bfM7OQ3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eGmO0h.1.UQQrExl4bfM7OQ3",
      resource: {
        resourceType: "Encounter",
        id: "eGmO0h.1.UQQrExl4bfM7OQ3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29545",
          },
        ],
        status: "unknown",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "10",
          display: "Surgery Log",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "51",
                display: "Surgery",
              },
            ],
            text: "Surgery",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            individual: {
              reference: "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
              type: "Practitioner",
              display: "Physician Family Medicine, MD",
            },
          },
        ],
        period: {
          start: "2023-06-06T16:20:00Z",
          end: "2023-06-06T17:35:00Z",
        },
        location: [
          {
            location: {
              reference:
                "Location/efR3SIdpRKF9BFBM5qakt9F5X1mWxjiAGu2hNTKbqOdI3",
              display: "EMH Operating Room",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
        partOf: {
          reference: "Encounter/eoK8nLRcEypNjtns4dgnF3Q3",
          identifier: {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29547",
          },
          display: "Hospital Encounter",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eMT95RPaM-HxLc3NeIA5qlQ3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eMT95RPaM-HxLc3NeIA5qlQ3",
      resource: {
        resourceType: "Encounter",
        id: "eMT95RPaM-HxLc3NeIA5qlQ3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29544",
          },
        ],
        status: "in-progress",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "13",
          display: "Support OP Encounter",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "101",
                display: "Office Visit",
              },
            ],
            text: "Office Visit",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "PART",
                    display: "Participation",
                  },
                ],
                text: "Participation",
              },
            ],
            individual: {
              reference: "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
              display: "Physician Family Medicine, MD",
            },
          },
        ],
        period: {
          start: "2023-06-02",
          end: "2023-06-02",
        },
        location: [
          {
            location: {
              reference:
                "Location/e4W4rmGe9QzuGm2Dy4NBqVc0KDe6yGld6HW95UuN-Qd03",
              display: "EMC Family Medicine",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eeDwmAYGuZcdy.pJIK7azIw3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eeDwmAYGuZcdy.pJIK7azIw3",
      resource: {
        resourceType: "Encounter",
        id: "eeDwmAYGuZcdy.pJIK7azIw3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29543",
          },
        ],
        status: "finished",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "13",
          display: "Support OP Encounter",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "111",
                display: "Orders Only",
              },
            ],
            text: "Orders Only",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "PART",
                    display: "Participation",
                  },
                ],
                text: "Participation",
              },
            ],
            individual: {
              reference: "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
              display: "Physician Family Medicine, MD",
            },
          },
        ],
        period: {
          start: "2023-06-02",
          end: "2023-06-02",
        },
        location: [
          {
            location: {
              reference:
                "Location/e4W4rmGe9QzuGm2Dy4NBqVc0KDe6yGld6HW95UuN-Qd03",
              display: "EMC Family Medicine",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/ej567ARSFdaF4ooZVunIlIg3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/ej567ARSFdaF4ooZVunIlIg3",
      resource: {
        resourceType: "Encounter",
        id: "ej567ARSFdaF4ooZVunIlIg3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29542",
          },
        ],
        status: "in-progress",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "4",
          display: "HOV",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.10110",
                code: "102",
                display: "Outpatient",
              },
            ],
            text: "Outpatient",
          },
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "3",
                display: "Hospital Encounter",
              },
            ],
            text: "Hospital Encounter",
          },
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.2.808267",
                code: "10023",
                display: "Transthoracic Echocardiogram Complete",
              },
            ],
            text: "Transthoracic Echocardiogram Complete",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "REF",
                    display: "referrer",
                  },
                ],
                text: "referrer",
              },
            ],
            individual: {
              reference: "Practitioner/elpRiy0AYgjhdjAhTBJ3Aiw3",
              type: "Practitioner",
              display: "Np Family Medicine, NP",
            },
          },
          {
            period: {
              start: "2023-06-02T20:50:00Z",
              end: "2023-06-02T21:20:00Z",
            },
            individual: {
              display: "EMC CARD ECHO",
            },
          },
        ],
        period: {
          start: "2023-06-02T20:49:58Z",
        },
        account: [
          {
            identifier: {
              system: "urn:oid:1.2.840.114350.1.13.0.1.7.2.726582",
              value: "1000501",
            },
            display: "LOPEZ,CAMILA MARIA",
          },
        ],
        hospitalization: {
          extension: [
            {
              valueDateTime: "2023-06-02T20:49:00Z",
              url: "http://open.epic.com/FHIR/StructureDefinition/extension/observation-datetime",
            },
          ],
        },
        location: [
          {
            location: {
              reference:
                "Location/exzJSfs-2YYqMPilpdzkcdMVzw6TB9WJfeqFRVe.cpSo3",
              display: "EMC Cardiology Procedures",
            },
            period: {
              start: "2023-06-02T20:49:00Z",
            },
          },
          {
            location: {
              reference:
                "Location/exzJSfs-2YYqMPilpdzkcdMVzw6TB9WJfeqFRVe.cpSo3",
              display: "EMC Cardiology Procedures",
            },
          },
          {
            location: {
              reference: "Location/eQSOrLdbVrMRc68KBcTBG4A3",
              display: "Epic Hospital System",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eoIRZgvu9RhrwOzDlZkRbSg3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eoIRZgvu9RhrwOzDlZkRbSg3",
      resource: {
        resourceType: "Encounter",
        id: "eoIRZgvu9RhrwOzDlZkRbSg3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29541",
          },
        ],
        status: "in-progress",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "4",
          display: "HOV",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.10110",
                code: "102",
                display: "Outpatient",
              },
            ],
            text: "Outpatient",
          },
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "3",
                display: "Hospital Encounter",
              },
            ],
            text: "Hospital Encounter",
          },
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.2.808267",
                code: "1053001",
                display: "X-Ray Exam",
              },
            ],
            text: "X-Ray Exam",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "REF",
                    display: "referrer",
                  },
                ],
                text: "referrer",
              },
            ],
            individual: {
              reference: "Practitioner/elpRiy0AYgjhdjAhTBJ3Aiw3",
              type: "Practitioner",
              display: "Np Family Medicine, NP",
            },
          },
          {
            period: {
              start: "2023-06-02T20:45:00Z",
              end: "2023-06-02T21:15:00Z",
            },
            individual: {
              display: "EMH X-RAY 1",
            },
          },
        ],
        period: {
          start: "2023-06-02T20:41:08Z",
        },
        account: [
          {
            identifier: {
              system: "urn:oid:1.2.840.114350.1.13.0.1.7.2.726582",
              value: "1000501",
            },
            display: "LOPEZ,CAMILA MARIA",
          },
        ],
        hospitalization: {
          extension: [
            {
              valueDateTime: "2023-06-02T20:41:00Z",
              url: "http://open.epic.com/FHIR/StructureDefinition/extension/observation-datetime",
            },
          ],
        },
        location: [
          {
            location: {
              reference:
                "Location/e6.GHPEJ3Jrk18e14wi2AJ5vFRqvLa0ZB6qH40N4UgB03",
              display: "EMH X-Ray Imaging",
            },
            period: {
              start: "2023-06-02T20:41:00Z",
            },
          },
          {
            location: {
              reference:
                "Location/e6.GHPEJ3Jrk18e14wi2AJ5vFRqvLa0ZB6qH40N4UgB03",
              display: "EMH X-Ray Imaging",
            },
          },
          {
            location: {
              reference: "Location/eQSOrLdbVrMRc68KBcTBG4A3",
              display: "Epic Hospital System",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eg7g5t2eKHWG0m-uwqjfJYA3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eg7g5t2eKHWG0m-uwqjfJYA3",
      resource: {
        resourceType: "Encounter",
        id: "eg7g5t2eKHWG0m-uwqjfJYA3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29540",
          },
        ],
        status: "in-progress",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "13",
          display: "Support OP Encounter",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "117",
                display: "Ancillary Orders",
              },
            ],
            text: "Ancillary Orders",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "PART",
                    display: "Participation",
                  },
                ],
                text: "Participation",
              },
            ],
            individual: {
              reference: "Practitioner/elpRiy0AYgjhdjAhTBJ3Aiw3",
              display: "Np Family Medicine, NP",
            },
          },
        ],
        period: {
          start: "2023-06-02",
          end: "2023-06-02",
        },
        location: [
          {
            location: {
              reference:
                "Location/e4W4rmGe9QzuGm2Dy4NBqVc0KDe6yGld6HW95UuN-Qd03",
              display: "EMC Family Medicine",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/exfbAtPCSLnf8s.193aMUnQ3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/exfbAtPCSLnf8s.193aMUnQ3",
      resource: {
        resourceType: "Encounter",
        id: "exfbAtPCSLnf8s.193aMUnQ3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "29539",
          },
        ],
        status: "finished",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "13",
          display: "Support OP Encounter",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "101",
                display: "Office Visit",
              },
            ],
            text: "Office Visit",
          },
          {
            coding: [
              {
                system: "http://www.ama-assn.org/go/cpt",
                code: "99211",
                display: "OFFICE OUTPATIENT VISIT 5 MINUTES",
              },
            ],
            text: "OFFICE OUTPATIENT VISIT 5 MINUTES",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                text: "losAuthorizingPhysician",
              },
            ],
            individual: {
              reference: "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
              type: "Practitioner",
              display: "Physician Family Medicine, MD",
            },
          },
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "PART",
                    display: "Participation",
                  },
                ],
                text: "Participation",
              },
            ],
            individual: {
              reference: "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
              display: "Physician Family Medicine, MD",
            },
          },
        ],
        period: {
          start: "2023-05-21",
          end: "2023-05-21",
        },
        location: [
          {
            location: {
              reference:
                "Location/e4W4rmGe9QzuGm2Dy4NBqVc0KDe6yGld6HW95UuN-Qd03",
              display: "EMC Family Medicine",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/elMz2mwjsRvKnZiR.0ceTUg3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/elMz2mwjsRvKnZiR.0ceTUg3",
      resource: {
        resourceType: "Encounter",
        id: "elMz2mwjsRvKnZiR.0ceTUg3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "27558",
          },
        ],
        status: "in-progress",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "13",
          display: "Support OP Encounter",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "101",
                display: "Office Visit",
              },
            ],
            text: "Office Visit",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "PART",
                    display: "Participation",
                  },
                ],
                text: "Participation",
              },
            ],
            individual: {
              reference: "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
              display: "Physician Family Medicine, MD",
            },
          },
        ],
        period: {
          start: "2019-05-28",
          end: "2019-05-28",
        },
        location: [
          {
            location: {
              reference:
                "Location/e4W4rmGe9QzuGm2Dy4NBqVc0KDe6yGld6HW95UuN-Qd03",
              display: "EMC Family Medicine",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
    {
      link: [
        {
          relation: "self",
          url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eEyT8ihlF3x9EsGhmSjNsaA3",
        },
      ],
      fullUrl:
        "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Encounter/eEyT8ihlF3x9EsGhmSjNsaA3",
      resource: {
        resourceType: "Encounter",
        id: "eEyT8ihlF3x9EsGhmSjNsaA3",
        identifier: [
          {
            use: "usual",
            system: "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
            value: "27547",
          },
        ],
        status: "in-progress",
        class: {
          system: "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
          code: "13",
          display: "Support OP Encounter",
        },
        type: [
          {
            coding: [
              {
                system: "urn:oid:1.2.840.114350.1.13.0.1.7.10.698084.30",
                code: "101",
                display: "Office Visit",
              },
            ],
            text: "Office Visit",
          },
        ],
        subject: {
          reference: "Patient/erXuFYUfucBZaryVksYEcMg3",
          display: "Lopez, Camila Maria",
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    code: "PART",
                    display: "Participation",
                  },
                ],
                text: "Participation",
              },
            ],
            individual: {
              reference: "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
              display: "Physician Family Medicine, MD",
            },
          },
        ],
        period: {
          start: "2019-05-24",
          end: "2019-05-24",
        },
        location: [
          {
            location: {
              reference:
                "Location/e4W4rmGe9QzuGm2Dy4NBqVc0KDe6yGld6HW95UuN-Qd03",
              display: "EMC Family Medicine",
            },
          },
        ],
        serviceProvider: {
          reference: "Organization/enRyWnSP963FYDpoks4NHOA3",
          display: "Epic Hospital System",
        },
      },
      search: {
        mode: "match",
      },
    },
  ],
};

export const benefitFromAPi = [
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1df3",
          value:
            'When part of your yearly "Wellness" visit with a provider who\naccepts Medicare assignment Note: If received as part of other medical treatment, Part B\ndeductible and coinsurance apply',
        },
      ],
    },
    _id: "6799102010683e6c20c5f73a",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1df4",
        value:
          'Must be part of yearly "Wellness" visit OR part of medical treatment',
      },
      {
        _id: "679f6beec4e25f230f7f1df5",
        value: "Provider must accept Medicare assignment (for $0 cost)",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1df6",
        value: ['Available during yearly "Wellness" visit'],
      },
    ],
    benefitName: "Advance care planning",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1df7",
          value:
            "When your doctor or provider accepts assignment Note: Part B\ndeductible doesn't apply for the preventive visit. However, coinsurance and deductible may\napply for additional tests or services not covered under this preventive benefit",
        },
      ],
    },
    _id: "67991c6b10683e6c20c5f73e",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1df8",
        value: "Must be within first 12 months of having Medicare Part B",
      },
      {
        _id: "679f6beec4e25f230f7f1df9",
        value: "Provider must accept Medicare assignment (for $0 cost)",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1dfa",
        value: "One-time visit within first 12 months of Part B coverage",
      },
    ],
    benefitName: '"Welcome to Medicare" preventive visit',
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1dfb",
          value:
            'When part of your yearly "Wellness" visit with a provider who\naccepts Medicare assignment Note: If received as part of other medical treatment, Part B\ndeductible and coinsurance apply',
        },
      ],
    },
    _id: "67991d1610683e6c20c5f73f",
    benefitCategory: "Other Benefits",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1dfc",
        value:
          'Must be part of yearly "Wellness" visit OR part of medical treatment',
      },
      {
        _id: "679f6beec4e25f230f7f1dfd",
        value: "Provider must accept Medicare assignment (for $0 cost)",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1dfe",
        value: 'Available during yearly "Wellness" visit',
      },
    ],
    benefitName: "Master Benefit",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1dff",
          value: "When your health care provider accepts assignment",
        },
      ],
    },
    _id: "67991e7c10683e6c20c5f741",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e00",
        value:
          "Adults who use alcohol but don't meet medical criteria for alcohol dependency",
      },
      {
        _id: "679f6beec4e25f230f7f1e01",
        value: "Must be competent and alert during counseling",
      },
      {
        _id: "679f6beec4e25f230f7f1e02",
        value: "Must receive counseling in a primary care setting",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e03",
        value: "Up to 4 brief, face-to-face counseling sessions per year",
      },
    ],
    benefitName: "Alcohol misuse screenings & counseling",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "Costs vary - Contact provider for estimates",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e04",
          value: [
            "Costs depend on specific services needed",
            "Different costs for inpatient vs outpatient",
            "May have choice between ambulatory surgical center and hospital outpatient",
            "Part B deductible and coinsurance apply",
          ],
          heading: "Notes",
        },
      ],
    },
    _id: "67991f3d10683e6c20c5f742",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e05",
        value: "Must meet conditions related to morbid obesity",
      },
      {
        _id: "679f6beec4e25f230f7f1e06",
        heading: "Coverage available for procedures like:",
        value: ["Gastric bypass surgery", "Laparoscopic banding surgery"],
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e07",
        value: "Not applicable",
      },
    ],
    benefitName: "Bariatric surgery",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e08",
          value: "After meeting Part B deductible",
        },
      ],
    },
    _id: "6799209a10683e6c20c5f743",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e09",
        value:
          "Must have behavioral health condition (depression, anxiety, or other mental health\ncondition)",
      },
      {
        _id: "679f6beec4e25f230f7f1e0a",
        value:
          "Provider must offer Psychiatric Collaborative Care Model services",
      },
      {
        _id: "679f6beec4e25f230f7f1e0b",
        value: "Must sign monthly service agreement",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e0c",
        value: "Not applicable",
      },
    ],
    benefitName: "Behavioral health integration services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e0d",
          value:
            "After meeting Part B deductible Note: Supplier must\naccept assignment",
        },
      ],
    },
    _id: "6799213510683e6c20c5f744",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e0e",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e0f",
        value: "Not applicable",
      },
    ],
    benefitName: "Blood sugar monitors",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e10",
          value:
            "After meeting Part B deductible Note: Supplier must\naccept assignment",
        },
      ],
    },
    _id: "6799219610683e6c20c5f745",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e11",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e12",
        value: "Not applicable",
      },
    ],
    benefitName: "Blood sugar test strips",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e13",
          value: "When provider accepts assignment",
        },
      ],
    },
    _id: "679921cf10683e6c20c5f746",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e14",
        value: [
          "Women determined to be estrogen-deficient and at risk for osteoporosis",
          "X-rays show possible osteoporosis, osteopenia, or vertebral fractures",
          "Taking or planning to begin prednisone or steroid-type drugs",
          "Diagnosed with primary hyperparathyroidism",
          "Being monitored for osteoporosis drug therapy effectiveness",
        ],
        heading: "Must meet one or more conditions:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e15",
        value: "Once every 24 months (or more often if medically necessary)",
      },
    ],
    benefitName: "Bone mass measurements",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e16",
          value: "Part B deductible applies",
        },
        {
          _id: "679f6beec4e25f230f7f1e17",
          value: "Covers doctor's services and external breast prostheses",
        },
      ],
    },
    _id: "6799228d10683e6c20c5f748",
    benefitCategory: "Cancer & Specialized Screenings",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e18",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e19",
        value: "Not applicable",
      },
    ],
    benefitName: "Breast prostheses",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e1a",
          value:
            "After meeting Part B deductible Note: Supplier must\naccept assignment",
        },
      ],
    },
    _id: "6799231410683e6c20c5f749",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e1b",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e1c",
        value: "Not applicable",
      },
    ],
    benefitName: "Canes",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e1d",
          value: "Doctor's office: 20% of Medicare-approved amount",
        },
        {
          _id: "679f6beec4e25f230f7f1e1e",
          value: "Hospital outpatient: 20% plus hospital copayment",
        },
        {
          _id: "679f6beec4e25f230f7f1e1f",
          value: "Part B deductible applies",
        },
      ],
    },
    _id: "6799237010683e6c20c5f74a",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e20",
        value: [
          "Heart attack in last 12 months",
          "Coronary artery bypass surgery",
          "Current stable angina",
          "Heart valve repair/replacement",
          "Coronary angioplasty or stenting",
          "Heart or heart-lung transplant",
          "Stable chronic heart failure",
        ],
        heading: "Must have at least one of these conditions:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e21",
        value: "Not applicable",
      },
    ],
    benefitName: "Cardiac rehabilitation programs",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e22",
          value: "When provider accepts assignment",
        },
      ],
    },
    _id: "6799247210683e6c20c5f74b",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e23",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e24",
        value: "Once every 5 years",
      },
    ],
    benefitName: "Cardiovascular disease screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e25",
          value:
            "Hospital outpatient/surgical center: 20% to both facility and doctor",
        },
        {
          _id: "679f6beec4e25f230f7f1e26",
          value: "Doctor's office: 20% for lens and surgery",
        },
        {
          _id: "679f6beec4e25f230f7f1e27",
          value: "Part B deductible applies",
        },
      ],
    },
    _id: "679928ca10683e6c20c5f74c",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e28",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e29",
        value: "Not applicable",
      },
    ],
    benefitName: "Cataract surgery",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1e2a",
          heading: "When provider accepts assignment Includes:",
          value: [
            "Lab Pap test",
            "Lab HPV with Pap test",
            "Specimen collection",
            "Pelvic and breast exams",
          ],
        },
      ],
    },
    _id: "6799298f10683e6c20c5f74d",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e2b",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e2c",
        value: "Standard: Once every 24 months",
      },
      {
        _id: "679f6beec4e25f230f7f1e2d",
        value:
          "High-risk or abnormal Pap in past 36 months: Once every 12 months",
      },
      {
        _id: "679f6beec4e25f230f7f1e2e",
        value: "HPV tests: Once every 5 years (ages 30-65)",
      },
    ],
    benefitName: "Cervical & vaginal cancer screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e2f",
          value: "Hospital outpatient: Copayment required",
        },
        {
          _id: "679f6beec4e25f230f7f1e30",
          value: "Doctor's office/clinic: 20% of Medicare-approved amount",
        },
        {
          _id: "679f6beec4e25f230f7f1e31",
          value: "Part B deductible applies",
        },
      ],
    },
    _id: "67992a9110683e6c20c5f74e",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e32",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e33",
        value: "Not applicable",
      },
    ],
    benefitName: "Chemotherapy",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e34",
          value: "Monthly fee",
        },
        {
          _id: "679f6beec4e25f230f7f1e35",
          value: "Part B deductible applies",
        },
        {
          _id: "679f6beec4e25f230f7f1e36",
          value:
            "Coinsurance applies Note: Supplemental insurance may help cover monthly fee",
        },
      ],
    },
    _id: "67992ca410683e6c20c5f74f",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e37",
        value: "Must have 2+ serious chronic conditions",
      },
      {
        _id: "679f6beec4e25f230f7f1e38",
        value: "Conditions expected to last at least one year",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e39",
        value: "Not applicable",
      },
    ],
    benefitName: "Chronic care management services ",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e3a",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "67992df910683e6c20c5f750",
    benefitCategory: "Substance Use & Pain Management",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e3b",
        value:
          "Must have persistent or recurring pain lasting longer than 3 months",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e3c",
        value: "Not applicable",
      },
    ],
    benefitName: "Chronic pain management & treatment services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e3d",
          value: "For Medicare-approved tests",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "6799331010683e6c20c5f754",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e3e",
        value: "Must be medically necessary",
      },
      {
        _id: "679f6beec4e25f230f7f1e3f",
        value: "Must be ordered by Medicare-enrolled provider",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e40",
        value: "Not applicable",
      },
    ],
    benefitName: "Clinical laboratory tests ",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e41",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679934ac10683e6c20c5f755",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e42",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e43",
        value: "Not applicable",
      },
    ],
    benefitName: "Cognitive assessment & care plan services ",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e44",
          value: "When provider accepts assignment",
        },
        {
          _id: "679f6beec4e25f230f7f1e45",
          heading: "Note: If polyp/tissue removal\noccurs:",
          value: [
            "15% of Medicare-approved amount for doctor's services",
            "15% facility coinsurance in hospital outpatient/surgical center",
            "Part B deductible doesn't apply",
          ],
        },
      ],
      bold: "$0 for screening tests",
    },
    _id: "67993b0d10683e6c20c5f756",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e46",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e47",
        value: "High risk: Once every 24 months",
      },
      {
        _id: "679f6beec4e25f230f7f1e48",
        value: "Not high risk: Once every 120 months",
      },
      {
        _id: "679f6beec4e25f230f7f1e49",
        value: "48 months after previous flexible sigmoidoscopy",
      },
      {
        _id: "679f6beec4e25f230f7f1e4a",
        value: "Follow-up covered after positive stool-based test",
      },
    ],
    benefitName: "Colonoscopies",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e4b",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "67993ed410683e6c20c5f757",
    benefitCategory: "Cancer & Specialized Screenings",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e4c",
        value: "Age 45-85",
      },
      {
        _id: "679f6beec4e25f230f7f1e4d",
        value: "No symptoms of colorectal disease",
      },
      {
        _id: "679f6beec4e25f230f7f1e4e",
        heading: "Average risk for colorectal cancer, meaning:",
        value: [
          "No personal history of adenomatous polyps, colorectal cancer, or inflammatory\nbowel disease",
          "No family history of colorectal cancers, adenomatous polyps, or hereditary\nconditions",
        ],
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e4f",
        value: "Once every 3 years",
      },
    ],
    benefitName: "Colorectal cancer blood-based biomarker screening tests",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e50",
          value: "Medicare does not cover concierge care fees",
        },
      ],
      bold: "100% of membership fee",
    },
    _id: "67993fee10683e6c20c5f758",
    benefitCategory: "Miscellaneous Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e51",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e52",
        value: "Not applicable",
      },
    ],
    benefitName: "Concierge care",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e53",
          value: "Not applicable",
        },
      ],
    },
    _id: "679940a910683e6c20c5f759",
    benefitCategory: "Diabetes Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e54",
        value: [
          "Have diabetes mellitus",
          "Take insulin or have history of low blood sugar",
          "Have prescription for testing supplies",
          "Completed training for monitor use",
          "Make routine in-person or approved telehealth visits",
          "Have testing instructions from doctor",
        ],
        heading: "Must meet all requirements:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e55",
        value: "Not applicable",
      },
    ],
    benefitName: "Continuous glucose monitors",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e56",
          value: "When provider accepts assignment",
        },
      ],
      bold: " $0 - You pay nothing ",
    },
    _id: "6799424d10683e6c20c5f75a",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e57",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e58",
        value: "Up to 8 counseling sessions in a 12-month period",
      },
    ],
    benefitName: "Counseling to prevent tobacco use & tobacco-caused disease",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e59",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1e5a",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "6799431710683e6c20c5f75b",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e5b",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e5c",
        value: "Not applicable",
      },
    ],
    benefitName: "Crutches",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e5d",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "6799465a30d96d1c09488a54",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e5e",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e5f",
        value: "One screening per year",
      },
    ],
    benefitName: "Depression screening ",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e60",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679946a630d96d1c09488a55",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e61",
        value: [
          "High blood pressure",
          "History of abnormal cholesterol/triglycerides",
          "Obesity",
          "History of high blood sugar",
        ],
        heading: "Must have one of these risk factors:",
      },
      {
        _id: "679f6beec4e25f230f7f1e62",
        heading: "OR two or more of these conditions:",
        value: [
          "Age 65 or older",
          "Overweight",
          "Family history of diabetes",
          "History of gestational diabetes/9+ pound baby",
        ],
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e63",
        value: "Up to 2 screenings per year (fasting or non-fasting)",
      },
    ],
    benefitName: "Diabetes screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e64",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679947ba30d96d1c09488a56",
    benefitCategory: "Diabetes Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e65",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e66",
        value: "Not applicable",
      },
    ],
    benefitName: "Diabetes self-management training",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e67",
          value: "For Medicare-covered clinical diagnostic laboratory tests",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679948e530d96d1c09488a57",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e68",
        value: "Must be medically necessary",
      },
      {
        _id: "679f6beec4e25f230f7f1e69",
        value: "Must be ordered by doctor or provider",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e6a",
        value: "Not applicable",
      },
    ],
    benefitName: "Diagnostic laboratory tests",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e6b",
          value: [
            "Doctor's office/testing facility: 20% of Medicare-approved amount",
            "Hospital outpatient: Copayment (may exceed 20%, but cannot exceed Part A hospital\nstay deductible)",
          ],
          heading: "After meeting Part B deductible Additional costs:",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "67994c7230d96d1c09488a59",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e6c",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e6d",
        value: "Not applicable",
      },
    ],
    benefitName: "Diagnostic non-laboratory tests",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e6e",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1e6f",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "67994d1430d96d1c09488a5a",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e70",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e71",
        value: "Not applicable",
      },
    ],
    benefitName: "Durable medical equipment (DME) coverage",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e72",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1e73",
          value: "Additional copayment for hospital outpatient setting",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "6799506d30d96d1c09488a5b",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e74",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e75",
        value: "Not applicable",
      },
    ],
    benefitName: "Eye exams (for diabetes)",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e76",
          heading: "After cataract surgery:",
          value: [
            "20% of Medicare-approved amount after Part B deductible",
            "Additional costs for upgraded frames",
            "Must use Medicare-enrolled supplier",
          ],
        },
      ],
      bold: "100% for routine eyewear ",
    },
    _id: "679951c230d96d1c09488a5c",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e77",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e78",
        value: "Not applicable",
      },
    ],
    benefitName: "Eyeglasses & contact lenses",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e79",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679953c730d96d1c09488a5d",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e7a",
        value: "Must be age 45 or older",
      },
      {
        _id: "679f6beec4e25f230f7f1e7b",
        value: "Requires doctor referral",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e7c",
        value: "Once every 12 month",
      },
    ],
    benefitName: "Fecal occult blood tests (screening)",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e7d",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a69e428f8292693b83f14",
    benefitCategory: "Vaccines",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e7e",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e7f",
        value: "Not applicable",
      },
    ],
    benefitName: "Flu shots",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e80",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1e81",
          value: "Additional copayment for hospital outpatient setting",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a6a4028f8292693b83f15",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e82",
        value: [
          "Diabetes",
          "Family history of glaucoma",
          "African American and 50+",
          "Hispanic and 65+",
        ],
        heading: "Must have at least one high-risk condition:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e83",
        value: "Once every 12 months",
      },
    ],
    benefitName: "Glaucoma screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e84",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1e85",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a6add28f8292693b83f16",
    benefitCategory: "Diabetes Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e86",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e87",
        value: "Not applicable",
      },
    ],
    benefitName: "Glucose control solutions",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "100% (not covered)",
      description: [],
    },
    _id: "679a6b4a28f8292693b83f17",
    benefitCategory: "Miscellaneous Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e88",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e89",
        value: "Not applicable",
      },
    ],
    benefitName: "Gym memberships & fitness programs",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e8a",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a6b9628f8292693b83f19",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e8b",
        value: ["High risk for HBV", "Pregnant"],
        heading: "Must meet one condition:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e8c",
        value: "High risk: Once yearly without Hepatitis B shot",
      },
      {
        _id: "679f6beec4e25f230f7f1e8d",
        value:
          "Pregnant: At first visit, delivery (if risk factors), future pregnancies",
      },
    ],
    benefitName: "Hepatitis B Virus (HBV) infection screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e8e",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a6c6228f8292693b83f1a",
    benefitCategory: "Vaccines",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e8f",
        value: [
          "Hemophilia with factors VIII or IX",
          "End-Stage Renal Disease",
          "Diabetes",
          "Living with Hepatitis B carrier",
          "Healthcare worker exposure",
          "Other risk factors (check with provider)",
        ],
        heading: "Medium or high risk due to:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e90",
        value: "Not applicable",
      },
    ],
    benefitName: "Hepatitis B shots",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e91",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a6cf028f8292693b83f1b",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e92",
        value: [
          "High risk (illicit injection drug use)",
          "Blood transfusion before 1992",
          "Born between 1945-1965",
        ],
        heading: "Must meet one condition:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e93",
        value: "High risk: Yearly screenings",
      },
      {
        _id: "679f6beec4e25f230f7f1e94",
        value: "Born 1945-1965 (not high risk): One-time screening",
      },
    ],
    benefitName: "Hepatitis C Virus infection screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e95",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a6d9428f8292693b83f1c",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e96",
        value: "Ages 15-65, OR",
      },
      {
        _id: "679f6beec4e25f230f7f1e97",
        value: "Under 15 or over 65 with increased risk",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e98",
        value: "Once per year",
      },
      {
        _id: "679f6beec4e25f230f7f1e99",
        value: "Pregnant women: Up to 3 times during pregnancy",
      },
    ],
    benefitName: "HIV screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e9a",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1e9b",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a6e0128f8292693b83f1d",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1e9c",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1e9d",
        value: "Not applicable",
      },
    ],
    benefitName: "Hospital beds",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1e9e",
          value: "Standard room humidifiers: 100% (not covered)",
        },
        {
          _id: "679f6beec4e25f230f7f1e9f",
          value: [
            "No separate cost with oxygen equipment",
            "20% for CPAP/respiratory assist devices",
          ],
          heading: "Medical humidifiers:",
        },
      ],
    },
    _id: "679a6e6728f8292693b83f1e",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ea0",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ea1",
        value: "Not applicable",
      },
    ],
    benefitName: "Humidifiers",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ea2",
          value: "For 2024,",
        },
        {
          _id: "679f6beec4e25f230f7f1ea3",
          value: "Days 1-60: $1,632 deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1ea4",
          value: "Days 61-90: $408 per day",
        },
        {
          _id: "679f6beec4e25f230f7f1ea5",
          value: "After day 90: $816 per day (lifetime reserve days)",
        },
        {
          _id: "679f6beec4e25f230f7f1ea6",
          value:
            "After lifetime reserve days: All costs Note: 2025 costs will increase slightly",
        },
      ],
    },
    _id: "679a6ed228f8292693b83f1f",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ea7",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ea8",
        value: "Not applicable",
      },
    ],
    benefitName: "Inpatient hospital care",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ea9",
          value: "$35 monthly cap per insulin product",
        },
        {
          _id: "679f6beec4e25f230f7f1eaa",
          value: "No deductible required",
        },
        {
          _id: "679f6beec4e25f230f7f1eab",
          value: "3-month supply: Maximum $105",
        },
        {
          _id: "679f6beec4e25f230f7f1eac",
          value:
            "Insulin-related supplies: 100% cost (unless covered by Part D)",
        },
      ],
    },
    _id: "679a6f6b28f8292693b83f20",
    benefitCategory: "Diabetes Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ead",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1eae",
        value: "Not applicable",
      },
    ],
    benefitName: "Insulin",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "100% (not covered)",
      description: [],
    },
    _id: "679a6fbd28f8292693b83f21",
    benefitCategory: "Palliative & Long-term Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eaf",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1eb0",
        value: "Not applicable",
      },
    ],
    benefitName: "Long-term care",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1eb1",
          value: "When provider accepts assignment",
        },
      ],
    },
    _id: "679a700228f8292693b83f22",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eb2",
        heading: "Must meet all conditions:",
        value: [
          "Age 50-77",
          "No signs/symptoms of lung cancer",
          "Current smoker or quit within 15 years",
          '20 "pack years" smoking history',
          "Doctor's order",
        ],
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1eb3",
        value: "Once per year",
      },
    ],
    benefitName: "Lung cancer screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1eb4",
          value: "After meeting Part B deductible",
        },
      ],
    },
    _id: "679a70ce28f8292693b83f23",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eb5",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1eb6",
        value: "Not applicable",
      },
    ],
    benefitName: "Lymphedema compression treatment items",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1eb7",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1eb8",
          value:
            "Additional facility copayment for hospital outpatient setting",
        },
      ],
    },
    _id: "679a714f28f8292693b83f24",
    benefitCategory: "Cancer & Specialized Screenings",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eb9",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1eba",
        value: "Not applicable",
      },
    ],
    benefitName: "Macular degeneration tests & treatment",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ebb",
          value: "Screening/baseline: $0 when provider accepts assignment",
        },
        {
          _id: "679f6beec4e25f230f7f1ebc",
          value: "Diagnostic: 20% after Part B deductible",
        },
      ],
    },
    _id: "679a71b528f8292693b83f25",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ebd",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ebe",
        value: "Not applicable",
      },
    ],
    benefitName: "Mammograms",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "100% (not covered)",
      description: [],
    },
    _id: "679a71ee28f8292693b83f26",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ebf",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ec0",
        value: "Not applicable",
      },
    ],
    benefitName: "Massage therapy",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "$0 - You pay nothing",
      description: [
        {
          _id: "679f6beec4e25f230f7f1ec1",
          value: "When provider accepts assignment",
        },
      ],
    },
    _id: "679a722f28f8292693b83f27",
    benefitCategory: "Diagnostic & Laboratory Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ec2",
        value: "Age 45-85",
      },
      {
        _id: "679f6beec4e25f230f7f1ec3",
        value: "No symptoms of colorectal disease",
      },
      {
        _id: "679f6beec4e25f230f7f1ec4",
        heading: "Average risk for colorectal cancer:",
        value: [
          "No personal history of polyps, cancer, or inflammatory bowel disease",
          "No family history of colorectal cancers or related conditions",
        ],
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ec5",
        value: "Once every 3 years",
      },
    ],
    benefitName: "Multi-target stool DNA tests",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      bold: "20% of Medicare-approved amount",
      description: [
        {
          _id: "679f6beec4e25f230f7f1ec6",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1ec7",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
    },
    _id: "679a731528f8292693b83f28",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ec8",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ec9",
        value: "Not applicable",
      },
    ],
    benefitName: "Nebulizers & nebulizer medications",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1eca",
          value: "Not applicable",
        },
      ],
    },
    _id: "679a73ae28f8292693b83f29",
    benefitCategory: "Palliative & Long-term Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ecb",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ecc",
        value: "Not applicable",
      },
    ],
    benefitName: "Nursing home care",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ecd",
          value: "When primary care provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a75c728f8292693b83f2a",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ece",
        value: "BMI of 30 or more",
      },
      {
        _id: "679f6beec4e25f230f7f1ecf",
        value: "Must be provided in primary care setting",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ed0",
        value: "Not applicable",
      },
    ],
    benefitName: "Obesity behavioral therapy",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ed1",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a762e28f8292693b83f2b",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ed2",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ed3",
        value: "Not applicable",
      },
    ],
    benefitName: "Occupational therapy services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ed4",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a768b28f8292693b83f2c",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ed5",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ed6",
        value: "Not applicable",
      },
    ],
    benefitName: "Orthopedic shoes",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ed7",
          value:
            "Up to 20% of Medicare-approved amount after Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1ed8",
          value: "Coinsurance may vary based on drug price",
        },
        {
          _id: "679f6beec4e25f230f7f1ed9",
          value: "No cost for home health nurse injection visits",
        },
      ],
    },
    _id: "679a76c028f8292693b83f2d",
    benefitCategory: "Medications & Prescription Support",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eda",
        value: [
          "Medicare home health services eligibility",
          "Postmenopausal osteoporosis-related fracture",
          "Inability to self-inject",
          "No available family/caregiver support for injection",
        ],
        heading: "Must be a woman with:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1edb",
        value: "Not applicable",
      },
    ],
    benefitName: "Osteoporosis drugs",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1edc",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a779f28f8292693b83f2e",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1edd",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ede",
        value: "Not applicable",
      },
    ],
    benefitName: "Ostomy supplies",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1edf",
          value: "20% of Medicare-approved amount for doctor services",
        },
        {
          _id: "679f6beec4e25f230f7f1ee0",
          value: "Hospital copayment for each service",
        },
        {
          _id: "679f6beec4e25f230f7f1ee1",
          value: "May be higher than doctor's office costs",
        },
        {
          _id: "679f6beec4e25f230f7f1ee2",
          value: "Cannot exceed inpatient deductible amount per service",
        },
        {
          _id: "679f6beec4e25f230f7f1ee3",
          value: "Part B deductible applies except for preventive services",
        },
      ],
    },
    _id: "679a77fd28f8292693b83f2f",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ee4",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ee5",
        value: "Not applicable",
      },
    ],
    benefitName: "Outpatient hospital services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ee6",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a798c28f8292693b83f30",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ee7",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ee8",
        value: "Not applicable",
      },
    ],
    benefitName: "Physical therapy services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ee9",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a7a4f28f8292693b83f31",
    benefitCategory: "Vaccines",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eea",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1eeb",
        value: "Not applicable",
      },
    ],
    benefitName: "Pneumococcal shots",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1eec",
          value:
            "Digital rectal exam: 20% after Part B deductible plus hospital copayment",
        },
        {
          _id: "679f6beec4e25f230f7f1eed",
          vale: "PSA blood test: $0 (additional fee possible if doctor doesn't accept assignment)",
        },
      ],
    },
    _id: "679a7aef28f8292693b83f32",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eee",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1eef",
        value: "Once every 12 months",
      },
    ],
    benefitName: "Prostate cancer screenings",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ef0",
          value: "Doctor's office: 20% of Medicare-approved amount",
        },
        {
          _id: "679f6beec4e25f230f7f1ef1",
          value: "Hospital outpatient: 20% plus copayment per session",
        },
        {
          _id: "679f6beec4e25f230f7f1ef2",
          value: "Part B deductible applies",
        },
      ],
    },
    _id: "679a7b3f28f8292693b83f33",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ef3",
        value: "Moderate to severe COPD with referral, OR",
      },
      {
        _id: "679f6beec4e25f230f7f1ef4",
        value: "COVID-19 with persistent respiratory symptoms for 4+ weeks",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ef5",
        value: "Not applicable",
      },
    ],
    benefitName: "Pulmonary rehabilitation programs",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1ef6",
          value: "Inpatient: Part A deductible and coinsurance",
        },
        {
          _id: "679f6beec4e25f230f7f1ef7",
          value: "Outpatient/clinic: 20% after Part B deductible",
        },
      ],
    },
    _id: "679a7c4928f8292693b83f34",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1ef8",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1ef9",
        value: "Not applicable",
      },
    ],
    benefitName: "Radiation therapy",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1efa",
          value: "For 2024,",
        },
        {
          _id: "679f6beec4e25f230f7f1efb",
          value: "Days 1-60: $1,632 deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1efc",
          value: "Days 61-90: $408 per day",
        },
        {
          _id: "679f6beec4e25f230f7f1efd",
          value: "Days 91+: $816 per day (lifetime reserve days)",
        },
        {
          _id: "679f6beec4e25f230f7f1efe",
          value: "After lifetime reserve days: All costs",
        },
      ],
    },
    _id: "679a7ccd28f8292693b83f35",
    benefitCategory: "Miscellaneous Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1eff",
        value: [
          "Care from Medicare-certified institution",
          "Review committee approval",
          "Written election filed",
          "May require 1-5 year wait after cancellation",
        ],
        heading: "Must meet all conditions:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f00",
        value: "Not applicable",
      },
    ],
    benefitName:
      "Religious nonmedical health care institution items & services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f01",
          value: "After Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f02",
          value: "Includes additional tests if needed",
        },
        {
          _id: "679f6beec4e25f230f7f1f03",
          value: "Third opinion covered if first two differ",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a7de128f8292693b83f36",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f04",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f05",
        value: "Not applicable",
      },
    ],
    benefitName: "Second surgical opinions",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f06",
          value: "For 2024,",
        },
        {
          _id: "679f6beec4e25f230f7f1f07",
          value: "Days 1-20: $0",
        },
        {
          _id: "679f6beec4e25f230f7f1f08",
          value: "Days 21-100: $204 per day",
        },
        {
          _id: "679f6beec4e25f230f7f1f09",
          value: "Days 101+: All costs",
        },
      ],
    },
    _id: "679a7ec128f8292693b83f37",
    benefitCategory: "Palliative & Long-term Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f0a",
        value: [
          "Have Part A with available benefit days",
          "Qualifying hospital stay",
          "Enter within 30 days of hospital",
          "Need daily skilled care",
          "Medicare-certified facility",
          "Doctor's order",
        ],
        heading: "Must meet all conditions:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f0b",
        value: "Not applicable",
      },
    ],
    benefitName: "Skilled nursing facility care",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f0c",
          value: '$0 during yearly "Wellness" visit',
        },
        {
          _id: "679f6beec4e25f230f7f1f0d",
          value:
            "20% of Medicare-approved amount for other visits after Part B deductible",
        },
      ],
    },
    _id: "679a7fb628f8292693b83f38",
    benefitCategory: "Mental Health Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f0e",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f0f",
        value: "Once every 6 months",
      },
      {
        _id: "679f6beec4e25f230f7f1f10",
        value: "More often with multiple providers",
      },
    ],
    benefitName: "Social determinants of health risk assessment",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f11",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a820928f8292693b83f39",
    benefitCategory: "Therapies & Rehabilitation",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f12",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f13",
        value: "Not applicable",
      },
    ],
    benefitName: "Speech-language pathology services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f14",
          value: "After meeting Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f15",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a828128f8292693b83f3a",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f16",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f17",
        value: "Not applicable",
      },
    ],
    benefitName: "Suction pumps",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f18",
          heading: "Costs vary based on:",
          value: [
            "Type of surgery",
            "Inpatient vs outpatient",
            "Specific services needed",
          ],
        },
      ],
    },
    _id: "679a85ad28f8292693b83f3b",
    benefitCategory: "Surgical & Treatment Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f19",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f1a",
        value: "Not applicable",
      },
    ],
    benefitName: "Surgery",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f1b",
          value: "After Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f1c",
          value: "Similar to in-person visit costs",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a873128f8292693b83f3c",
    benefitCategory: "Miscellaneous Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f1d",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f1e",
        value: "Not applicable",
      },
    ],
    benefitName: "Telehealth",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f1f",
          value: "After Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f20",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a879628f8292693b83f3d",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f21",
        value: "Must have diabetes",
      },
      {
        _id: "679f6beec4e25f230f7f1f22",
        value: "Must have severe diabetic foot disease",
      },
      {
        _id: "679f6beec4e25f230f7f1f23",
        value: "Certification from diabetes doctor",
      },
      {
        _id: "679f6beec4e25f230f7f1f24",
        valu: "Prescription from qualified provider",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f25",
        value: "Not applicable",
      },
    ],
    benefitName: "Therapeutic shoes & inserts",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f26",
          value: "After Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f27",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a880928f8292693b83f3e",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f28",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f29",
        value: "Not applicable",
      },
    ],
    benefitName: "Traction equipment",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f2a",
          value: "After Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a885428f8292693b83f3f",
    benefitCategory: "Miscellaneous Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f2b",
        value: "Prior discussion with provider about these visits",
      },
      {
        _id: "679f6beec4e25f230f7f1f2c",
        value: "Verbal consent documented in medical record",
      },
      {
        _id: "679f6beec4e25f230f7f1f2d",
        value: "Not related to visit in past 7 days",
      },
      {
        _id: "679f6beec4e25f230f7f1f2e",
        value: "Not leading to visit within 24 hours",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f2f",
        value: "Not applicable",
      },
    ],
    benefitName: "Virtual check-ins",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f30",
          value: "After Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f31",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a89ba28f8292693b83f40",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f32",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f33",
        value: "Not applicable",
      },
    ],
    benefitName: "Walkers",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f34",
          value: "When provider accepts assignment",
        },
        {
          _id: "679f6beec4e25f230f7f1f35",
          value: "Note: Additional tests may incur\ncosts",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a8a0e28f8292693b83f41",
    benefitCategory: "Preventive & Screening Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f36",
        value: "Must have Part B for over 12 months",
      },
      {
        _id: "679f6beec4e25f230f7f1f37",
        value: 'Cannot be within 12 months of "Welcome to Medicare" visit',
      },
      {
        _id: "679f6beec4e25f230f7f1f38",
        value: 'No prior "Welcome" visit required',
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f39",
        value: "Not applicable",
      },
    ],
    benefitName: 'Yearly "Wellness" visits',
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f3a",
          value: "After Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f3b",
          value: "Note: Supplier must\naccept assignment",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a8a5428f8292693b83f42",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f3c",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f3d",
        value: "Not applicable",
      },
    ],
    benefitName: "Wheelchairs & scooters",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f3e",
          value: "When provider accepts assignment",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a8b8628f8292693b83f43",
    benefitCategory: "Vaccines",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f3f",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f40",
        value: "Not applicable",
      },
    ],
    benefitName: "Coronavirus disease 2019 (COVID-19) vaccine",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f41",
          value: "With Medicare-approved provider",
        },
      ],
      bold: "$0 - You pay nothing",
    },
    _id: "679a8e2ccf134ac7cbd97938",
    benefitCategory: "Palliative & Long-term Care",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f42",
        value: [
          "Have Medicare Part A",
          "Certified terminally ill (6 months or less)",
          "Accept comfort care over curative care",
          "Sign statement choosing hospice care",
        ],
        heading: "Must meet all conditions:",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f43",
        value: "Not applicable",
      },
    ],
    benefitName: "Hospice care",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f44",
          value: "For 2024,",
        },
        {
          _id: "679f6beec4e25f230f7f1f45",
          value: "Days 1-60: $1,632 deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f46",
          value: "Days 61-90: $408 per day",
        },
        {
          _id: "679f6beec4e25f230f7f1f47",
          value: "Days 91+: $816 per day (lifetime reserve days)",
        },
        {
          _id: "679f6beec4e25f230f7f1f48",
          value: "After lifetime reserve days: All costs",
        },
        {
          _id: "679f6beec4e25f230f7f1f49",
          value: "20% for doctor services",
        },
      ],
    },
    _id: "679a8e9acf134ac7cbd97939",
    benefitCategory: "Mental Health Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f4a",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f4b",
        value: "Not applicable",
      },
    ],
    benefitName: "Mental health care (inpatient)",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f4c",
          value: "Depression screening: $0",
        },
        {
          _id: "679f6beec4e25f230f7f1f4d",
          value: "Other services: 20% after Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f4e",
          value: "Additional hospital copayment may apply",
        },
      ],
    },
    _id: "679a8f6ccf134ac7cbd9793a",
    benefitCategory: "Mental Health Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f4f",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f50",
        value: "Not applicable",
      },
    ],
    benefitName: "Mental health care (outpatient)",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f51",
          value:
            "Percentage of Medicare-approved amount for professional services",
        },
        {
          _id: "679f6beec4e25f230f7f1f52",
          value: "Coinsurance for each day after Part B deductible",
        },
        {
          _id: "679f6beec4e25f230f7f1f53",
          value: "Must accept assignment",
        },
      ],
    },
    _id: "679a8fbacf134ac7cbd9793c",
    benefitCategory: "Mental Health Services",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f54",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f55",
        value: "Not applicable",
      },
    ],
    benefitName: "Mental health care (partial hospitalization)",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f56",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "20% of Medicare-approved amount",
    },
    _id: "679a9021cf134ac7cbd9793d",
    benefitCategory: "Medical Equipment & Supplies",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f57",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f58",
        value: "Not applicable",
      },
    ],
    benefitName: "Oxygen equipment & accessories",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f59",
          value: "After meeting Part B deductible",
        },
      ],
      bold: "Up to 20% of Medicare-approved amount",
    },
    _id: "679a90fccf134ac7cbd9793e",
    benefitCategory: "Medications & Prescription Support",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f5a",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f5b",
        value: "Not applicable",
      },
    ],
    benefitName: "Prescription drugs (outpatient)",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
  {
    benefitCost: {
      description: [
        {
          _id: "679f6beec4e25f230f7f1f5c",
          value: "No copayments at Opioid Treatment Programs (OTPs)",
        },
        {
          _id: "679f6beec4e25f230f7f1f5d",
          value: "Part B deductible applies for supplies/medications",
        },
        {
          _id: "679f6beec4e25f230f7f1f5e",
          value: "Standard copayments apply for doctor visits",
        },
      ],
    },
    _id: "679a96a76bbbe7b66d7f5371",
    benefitCategory: "Substance Use & Pain Management",
    benefitEligibility: [
      {
        _id: "679f6beec4e25f230f7f1f5f",
        value: "Not applicable",
      },
    ],
    benefitFrequency: [
      {
        _id: "679f6beec4e25f230f7f1f60",
        value: "Not applicable",
      },
    ],
    benefitName: "Opioid Use Disorder treatment services",
    benefitProvider: "Original Medicare (Parts A and B)",
  },
];

const formated = {
  "Preventive & Screening Services": [
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1df3",
            value:
              'When part of your yearly "Wellness" visit with a provider who\naccepts Medicare assignment Note: If received as part of other medical treatment, Part B\ndeductible and coinsurance apply',
          },
        ],
      },
      _id: "6799102010683e6c20c5f73a",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1df4",
          value:
            'Must be part of yearly "Wellness" visit OR part of medical treatment',
        },
        {
          _id: "679f6beec4e25f230f7f1df5",
          value: "Provider must accept Medicare assignment (for $0 cost)",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1df6",
          value: ['Available during yearly "Wellness" visit'],
        },
      ],
      benefitName: "Advance care planning",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1df7",
            value:
              "When your doctor or provider accepts assignment Note: Part B\ndeductible doesn't apply for the preventive visit. However, coinsurance and deductible may\napply for additional tests or services not covered under this preventive benefit",
          },
        ],
      },
      _id: "67991c6b10683e6c20c5f73e",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1df8",
          value: "Must be within first 12 months of having Medicare Part B",
        },
        {
          _id: "679f6beec4e25f230f7f1df9",
          value: "Provider must accept Medicare assignment (for $0 cost)",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1dfa",
          value: "One-time visit within first 12 months of Part B coverage",
        },
      ],
      benefitName: '"Welcome to Medicare" preventive visit',
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1dff",
            value: "When your health care provider accepts assignment",
          },
        ],
      },
      _id: "67991e7c10683e6c20c5f741",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e00",
          value:
            "Adults who use alcohol but don't meet medical criteria for alcohol dependency",
        },
        {
          _id: "679f6beec4e25f230f7f1e01",
          value: "Must be competent and alert during counseling",
        },
        {
          _id: "679f6beec4e25f230f7f1e02",
          value: "Must receive counseling in a primary care setting",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e03",
          value: "Up to 4 brief, face-to-face counseling sessions per year",
        },
      ],
      benefitName: "Alcohol misuse screenings & counseling",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e13",
            value: "When provider accepts assignment",
          },
        ],
      },
      _id: "679921cf10683e6c20c5f746",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e14",
          value: [
            "Women determined to be estrogen-deficient and at risk for osteoporosis",
            "X-rays show possible osteoporosis, osteopenia, or vertebral fractures",
            "Taking or planning to begin prednisone or steroid-type drugs",
            "Diagnosed with primary hyperparathyroidism",
            "Being monitored for osteoporosis drug therapy effectiveness",
          ],
          heading: "Must meet one or more conditions:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e15",
          value: "Once every 24 months (or more often if medically necessary)",
        },
      ],
      benefitName: "Bone mass measurements",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e22",
            value: "When provider accepts assignment",
          },
        ],
      },
      _id: "6799247210683e6c20c5f74b",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e23",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e24",
          value: "Once every 5 years",
        },
      ],
      benefitName: "Cardiovascular disease screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e2a",
            heading: "When provider accepts assignment Includes:",
            value: [
              "Lab Pap test",
              "Lab HPV with Pap test",
              "Specimen collection",
              "Pelvic and breast exams",
            ],
          },
        ],
      },
      _id: "6799298f10683e6c20c5f74d",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e2b",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e2c",
          value: "Standard: Once every 24 months",
        },
        {
          _id: "679f6beec4e25f230f7f1e2d",
          value:
            "High-risk or abnormal Pap in past 36 months: Once every 12 months",
        },
        {
          _id: "679f6beec4e25f230f7f1e2e",
          value: "HPV tests: Once every 5 years (ages 30-65)",
        },
      ],
      benefitName: "Cervical & vaginal cancer screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e56",
            value: "When provider accepts assignment",
          },
        ],
        bold: " $0 - You pay nothing ",
      },
      _id: "6799424d10683e6c20c5f75a",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e57",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e58",
          value: "Up to 8 counseling sessions in a 12-month period",
        },
      ],
      benefitName: "Counseling to prevent tobacco use & tobacco-caused disease",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e5d",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "6799465a30d96d1c09488a54",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e5e",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e5f",
          value: "One screening per year",
        },
      ],
      benefitName: "Depression screening ",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e60",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679946a630d96d1c09488a55",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e61",
          value: [
            "High blood pressure",
            "History of abnormal cholesterol/triglycerides",
            "Obesity",
            "History of high blood sugar",
          ],
          heading: "Must have one of these risk factors:",
        },
        {
          _id: "679f6beec4e25f230f7f1e62",
          heading: "OR two or more of these conditions:",
          value: [
            "Age 65 or older",
            "Overweight",
            "Family history of diabetes",
            "History of gestational diabetes/9+ pound baby",
          ],
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e63",
          value: "Up to 2 screenings per year (fasting or non-fasting)",
        },
      ],
      benefitName: "Diabetes screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e8a",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a6b9628f8292693b83f19",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e8b",
          value: ["High risk for HBV", "Pregnant"],
          heading: "Must meet one condition:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e8c",
          value: "High risk: Once yearly without Hepatitis B shot",
        },
        {
          _id: "679f6beec4e25f230f7f1e8d",
          value:
            "Pregnant: At first visit, delivery (if risk factors), future pregnancies",
        },
      ],
      benefitName: "Hepatitis B Virus (HBV) infection screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e91",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a6cf028f8292693b83f1b",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e92",
          value: [
            "High risk (illicit injection drug use)",
            "Blood transfusion before 1992",
            "Born between 1945-1965",
          ],
          heading: "Must meet one condition:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e93",
          value: "High risk: Yearly screenings",
        },
        {
          _id: "679f6beec4e25f230f7f1e94",
          value: "Born 1945-1965 (not high risk): One-time screening",
        },
      ],
      benefitName: "Hepatitis C Virus infection screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e95",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a6d9428f8292693b83f1c",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e96",
          value: "Ages 15-65, OR",
        },
        {
          _id: "679f6beec4e25f230f7f1e97",
          value: "Under 15 or over 65 with increased risk",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e98",
          value: "Once per year",
        },
        {
          _id: "679f6beec4e25f230f7f1e99",
          value: "Pregnant women: Up to 3 times during pregnancy",
        },
      ],
      benefitName: "HIV screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1eb1",
            value: "When provider accepts assignment",
          },
        ],
      },
      _id: "679a700228f8292693b83f22",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eb2",
          heading: "Must meet all conditions:",
          value: [
            "Age 50-77",
            "No signs/symptoms of lung cancer",
            "Current smoker or quit within 15 years",
            '20 "pack years" smoking history',
            "Doctor's order",
          ],
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1eb3",
          value: "Once per year",
        },
      ],
      benefitName: "Lung cancer screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ebb",
            value: "Screening/baseline: $0 when provider accepts assignment",
          },
          {
            _id: "679f6beec4e25f230f7f1ebc",
            value: "Diagnostic: 20% after Part B deductible",
          },
        ],
      },
      _id: "679a71b528f8292693b83f25",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ebd",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ebe",
          value: "Not applicable",
        },
      ],
      benefitName: "Mammograms",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ecd",
            value: "When primary care provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a75c728f8292693b83f2a",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ece",
          value: "BMI of 30 or more",
        },
        {
          _id: "679f6beec4e25f230f7f1ecf",
          value: "Must be provided in primary care setting",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ed0",
          value: "Not applicable",
        },
      ],
      benefitName: "Obesity behavioral therapy",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1eec",
            value:
              "Digital rectal exam: 20% after Part B deductible plus hospital copayment",
          },
          {
            _id: "679f6beec4e25f230f7f1eed",
            vale: "PSA blood test: $0 (additional fee possible if doctor doesn't accept assignment)",
          },
        ],
      },
      _id: "679a7aef28f8292693b83f32",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eee",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1eef",
          value: "Once every 12 months",
        },
      ],
      benefitName: "Prostate cancer screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f34",
            value: "When provider accepts assignment",
          },
          {
            _id: "679f6beec4e25f230f7f1f35",
            value: "Note: Additional tests may incur\ncosts",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a8a0e28f8292693b83f41",
      benefitCategory: "Preventive & Screening Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f36",
          value: "Must have Part B for over 12 months",
        },
        {
          _id: "679f6beec4e25f230f7f1f37",
          value: 'Cannot be within 12 months of "Welcome to Medicare" visit',
        },
        {
          _id: "679f6beec4e25f230f7f1f38",
          value: 'No prior "Welcome" visit required',
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f39",
          value: "Not applicable",
        },
      ],
      benefitName: 'Yearly "Wellness" visits',
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Other Benefits": [
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1dfb",
            value:
              'When part of your yearly "Wellness" visit with a provider who\naccepts Medicare assignment Note: If received as part of other medical treatment, Part B\ndeductible and coinsurance apply',
          },
        ],
      },
      _id: "67991d1610683e6c20c5f73f",
      benefitCategory: "Other Benefits",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1dfc",
          value:
            'Must be part of yearly "Wellness" visit OR part of medical treatment',
        },
        {
          _id: "679f6beec4e25f230f7f1dfd",
          value: "Provider must accept Medicare assignment (for $0 cost)",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1dfe",
          value: 'Available during yearly "Wellness" visit',
        },
      ],
      benefitName: "Master Benefit",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Surgical & Treatment Services": [
    {
      benefitCost: {
        bold: "Costs vary - Contact provider for estimates",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e04",
            value: [
              "Costs depend on specific services needed",
              "Different costs for inpatient vs outpatient",
              "May have choice between ambulatory surgical center and hospital outpatient",
              "Part B deductible and coinsurance apply",
            ],
            heading: "Notes",
          },
        ],
      },
      _id: "67991f3d10683e6c20c5f742",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e05",
          value: "Must meet conditions related to morbid obesity",
        },
        {
          _id: "679f6beec4e25f230f7f1e06",
          heading: "Coverage available for procedures like:",
          value: ["Gastric bypass surgery", "Laparoscopic banding surgery"],
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e07",
          value: "Not applicable",
        },
      ],
      benefitName: "Bariatric surgery",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e25",
            value:
              "Hospital outpatient/surgical center: 20% to both facility and doctor",
          },
          {
            _id: "679f6beec4e25f230f7f1e26",
            value: "Doctor's office: 20% for lens and surgery",
          },
          {
            _id: "679f6beec4e25f230f7f1e27",
            value: "Part B deductible applies",
          },
        ],
      },
      _id: "679928ca10683e6c20c5f74c",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e28",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e29",
          value: "Not applicable",
        },
      ],
      benefitName: "Cataract surgery",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e2f",
            value: "Hospital outpatient: Copayment required",
          },
          {
            _id: "679f6beec4e25f230f7f1e30",
            value: "Doctor's office/clinic: 20% of Medicare-approved amount",
          },
          {
            _id: "679f6beec4e25f230f7f1e31",
            value: "Part B deductible applies",
          },
        ],
      },
      _id: "67992a9110683e6c20c5f74e",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e32",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e33",
          value: "Not applicable",
        },
      ],
      benefitName: "Chemotherapy",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ea2",
            value: "For 2024,",
          },
          {
            _id: "679f6beec4e25f230f7f1ea3",
            value: "Days 1-60: $1,632 deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1ea4",
            value: "Days 61-90: $408 per day",
          },
          {
            _id: "679f6beec4e25f230f7f1ea5",
            value: "After day 90: $816 per day (lifetime reserve days)",
          },
          {
            _id: "679f6beec4e25f230f7f1ea6",
            value:
              "After lifetime reserve days: All costs Note: 2025 costs will increase slightly",
          },
        ],
      },
      _id: "679a6ed228f8292693b83f1f",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ea7",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ea8",
          value: "Not applicable",
        },
      ],
      benefitName: "Inpatient hospital care",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1edf",
            value: "20% of Medicare-approved amount for doctor services",
          },
          {
            _id: "679f6beec4e25f230f7f1ee0",
            value: "Hospital copayment for each service",
          },
          {
            _id: "679f6beec4e25f230f7f1ee1",
            value: "May be higher than doctor's office costs",
          },
          {
            _id: "679f6beec4e25f230f7f1ee2",
            value: "Cannot exceed inpatient deductible amount per service",
          },
          {
            _id: "679f6beec4e25f230f7f1ee3",
            value: "Part B deductible applies except for preventive services",
          },
        ],
      },
      _id: "679a77fd28f8292693b83f2f",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ee4",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ee5",
          value: "Not applicable",
        },
      ],
      benefitName: "Outpatient hospital services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ef6",
            value: "Inpatient: Part A deductible and coinsurance",
          },
          {
            _id: "679f6beec4e25f230f7f1ef7",
            value: "Outpatient/clinic: 20% after Part B deductible",
          },
        ],
      },
      _id: "679a7c4928f8292693b83f34",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ef8",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ef9",
          value: "Not applicable",
        },
      ],
      benefitName: "Radiation therapy",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f01",
            value: "After Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f02",
            value: "Includes additional tests if needed",
          },
          {
            _id: "679f6beec4e25f230f7f1f03",
            value: "Third opinion covered if first two differ",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a7de128f8292693b83f36",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f04",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f05",
          value: "Not applicable",
        },
      ],
      benefitName: "Second surgical opinions",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f18",
            heading: "Costs vary based on:",
            value: [
              "Type of surgery",
              "Inpatient vs outpatient",
              "Specific services needed",
            ],
          },
        ],
      },
      _id: "679a85ad28f8292693b83f3b",
      benefitCategory: "Surgical & Treatment Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f19",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f1a",
          value: "Not applicable",
        },
      ],
      benefitName: "Surgery",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Therapies & Rehabilitation": [
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e08",
            value: "After meeting Part B deductible",
          },
        ],
      },
      _id: "6799209a10683e6c20c5f743",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e09",
          value:
            "Must have behavioral health condition (depression, anxiety, or other mental health\ncondition)",
        },
        {
          _id: "679f6beec4e25f230f7f1e0a",
          value:
            "Provider must offer Psychiatric Collaborative Care Model services",
        },
        {
          _id: "679f6beec4e25f230f7f1e0b",
          value: "Must sign monthly service agreement",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e0c",
          value: "Not applicable",
        },
      ],
      benefitName: "Behavioral health integration services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e1d",
            value: "Doctor's office: 20% of Medicare-approved amount",
          },
          {
            _id: "679f6beec4e25f230f7f1e1e",
            value: "Hospital outpatient: 20% plus hospital copayment",
          },
          {
            _id: "679f6beec4e25f230f7f1e1f",
            value: "Part B deductible applies",
          },
        ],
      },
      _id: "6799237010683e6c20c5f74a",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e20",
          value: [
            "Heart attack in last 12 months",
            "Coronary artery bypass surgery",
            "Current stable angina",
            "Heart valve repair/replacement",
            "Coronary angioplasty or stenting",
            "Heart or heart-lung transplant",
            "Stable chronic heart failure",
          ],
          heading: "Must have at least one of these conditions:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e21",
          value: "Not applicable",
        },
      ],
      benefitName: "Cardiac rehabilitation programs",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e34",
            value: "Monthly fee",
          },
          {
            _id: "679f6beec4e25f230f7f1e35",
            value: "Part B deductible applies",
          },
          {
            _id: "679f6beec4e25f230f7f1e36",
            value:
              "Coinsurance applies Note: Supplemental insurance may help cover monthly fee",
          },
        ],
      },
      _id: "67992ca410683e6c20c5f74f",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e37",
          value: "Must have 2+ serious chronic conditions",
        },
        {
          _id: "679f6beec4e25f230f7f1e38",
          value: "Conditions expected to last at least one year",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e39",
          value: "Not applicable",
        },
      ],
      benefitName: "Chronic care management services ",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e41",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679934ac10683e6c20c5f755",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e42",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e43",
          value: "Not applicable",
        },
      ],
      benefitName: "Cognitive assessment & care plan services ",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "100% (not covered)",
        description: [],
      },
      _id: "679a71ee28f8292693b83f26",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ebf",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ec0",
          value: "Not applicable",
        },
      ],
      benefitName: "Massage therapy",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ed1",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a762e28f8292693b83f2b",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ed2",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ed3",
          value: "Not applicable",
        },
      ],
      benefitName: "Occupational therapy services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ee6",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a798c28f8292693b83f30",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ee7",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ee8",
          value: "Not applicable",
        },
      ],
      benefitName: "Physical therapy services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ef0",
            value: "Doctor's office: 20% of Medicare-approved amount",
          },
          {
            _id: "679f6beec4e25f230f7f1ef1",
            value: "Hospital outpatient: 20% plus copayment per session",
          },
          {
            _id: "679f6beec4e25f230f7f1ef2",
            value: "Part B deductible applies",
          },
        ],
      },
      _id: "679a7b3f28f8292693b83f33",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ef3",
          value: "Moderate to severe COPD with referral, OR",
        },
        {
          _id: "679f6beec4e25f230f7f1ef4",
          value: "COVID-19 with persistent respiratory symptoms for 4+ weeks",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ef5",
          value: "Not applicable",
        },
      ],
      benefitName: "Pulmonary rehabilitation programs",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f11",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a820928f8292693b83f39",
      benefitCategory: "Therapies & Rehabilitation",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f12",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f13",
          value: "Not applicable",
        },
      ],
      benefitName: "Speech-language pathology services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Medical Equipment & Supplies": [
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e0d",
            value:
              "After meeting Part B deductible Note: Supplier must\naccept assignment",
          },
        ],
      },
      _id: "6799213510683e6c20c5f744",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e0e",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e0f",
          value: "Not applicable",
        },
      ],
      benefitName: "Blood sugar monitors",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e10",
            value:
              "After meeting Part B deductible Note: Supplier must\naccept assignment",
          },
        ],
      },
      _id: "6799219610683e6c20c5f745",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e11",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e12",
          value: "Not applicable",
        },
      ],
      benefitName: "Blood sugar test strips",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e1a",
            value:
              "After meeting Part B deductible Note: Supplier must\naccept assignment",
          },
        ],
      },
      _id: "6799231410683e6c20c5f749",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e1b",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e1c",
          value: "Not applicable",
        },
      ],
      benefitName: "Canes",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e59",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1e5a",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "6799431710683e6c20c5f75b",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e5b",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e5c",
          value: "Not applicable",
        },
      ],
      benefitName: "Crutches",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e6e",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1e6f",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "67994d1430d96d1c09488a5a",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e70",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e71",
          value: "Not applicable",
        },
      ],
      benefitName: "Durable medical equipment (DME) coverage",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e76",
            heading: "After cataract surgery:",
            value: [
              "20% of Medicare-approved amount after Part B deductible",
              "Additional costs for upgraded frames",
              "Must use Medicare-enrolled supplier",
            ],
          },
        ],
        bold: "100% for routine eyewear ",
      },
      _id: "679951c230d96d1c09488a5c",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e77",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e78",
          value: "Not applicable",
        },
      ],
      benefitName: "Eyeglasses & contact lenses",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e9a",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1e9b",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a6e0128f8292693b83f1d",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e9c",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e9d",
          value: "Not applicable",
        },
      ],
      benefitName: "Hospital beds",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e9e",
            value: "Standard room humidifiers: 100% (not covered)",
          },
          {
            _id: "679f6beec4e25f230f7f1e9f",
            value: [
              "No separate cost with oxygen equipment",
              "20% for CPAP/respiratory assist devices",
            ],
            heading: "Medical humidifiers:",
          },
        ],
      },
      _id: "679a6e6728f8292693b83f1e",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ea0",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ea1",
          value: "Not applicable",
        },
      ],
      benefitName: "Humidifiers",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1eb4",
            value: "After meeting Part B deductible",
          },
        ],
      },
      _id: "679a70ce28f8292693b83f23",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eb5",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1eb6",
          value: "Not applicable",
        },
      ],
      benefitName: "Lymphedema compression treatment items",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1ec6",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1ec7",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
      },
      _id: "679a731528f8292693b83f28",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ec8",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ec9",
          value: "Not applicable",
        },
      ],
      benefitName: "Nebulizers & nebulizer medications",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ed4",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a768b28f8292693b83f2c",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ed5",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ed6",
          value: "Not applicable",
        },
      ],
      benefitName: "Orthopedic shoes",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1edc",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a779f28f8292693b83f2e",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1edd",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ede",
          value: "Not applicable",
        },
      ],
      benefitName: "Ostomy supplies",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f14",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f15",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a828128f8292693b83f3a",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f16",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f17",
          value: "Not applicable",
        },
      ],
      benefitName: "Suction pumps",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f1f",
            value: "After Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f20",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a879628f8292693b83f3d",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f21",
          value: "Must have diabetes",
        },
        {
          _id: "679f6beec4e25f230f7f1f22",
          value: "Must have severe diabetic foot disease",
        },
        {
          _id: "679f6beec4e25f230f7f1f23",
          value: "Certification from diabetes doctor",
        },
        {
          _id: "679f6beec4e25f230f7f1f24",
          valu: "Prescription from qualified provider",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f25",
          value: "Not applicable",
        },
      ],
      benefitName: "Therapeutic shoes & inserts",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f26",
            value: "After Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f27",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a880928f8292693b83f3e",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f28",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f29",
          value: "Not applicable",
        },
      ],
      benefitName: "Traction equipment",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f30",
            value: "After Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f31",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a89ba28f8292693b83f40",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f32",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f33",
          value: "Not applicable",
        },
      ],
      benefitName: "Walkers",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f3a",
            value: "After Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f3b",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a8a5428f8292693b83f42",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f3c",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f3d",
          value: "Not applicable",
        },
      ],
      benefitName: "Wheelchairs & scooters",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f56",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a9021cf134ac7cbd9793d",
      benefitCategory: "Medical Equipment & Supplies",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f57",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f58",
          value: "Not applicable",
        },
      ],
      benefitName: "Oxygen equipment & accessories",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Cancer & Specialized Screenings": [
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1e16",
            value: "Part B deductible applies",
          },
          {
            _id: "679f6beec4e25f230f7f1e17",
            value: "Covers doctor's services and external breast prostheses",
          },
        ],
      },
      _id: "6799228d10683e6c20c5f748",
      benefitCategory: "Cancer & Specialized Screenings",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e18",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e19",
          value: "Not applicable",
        },
      ],
      benefitName: "Breast prostheses",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e4b",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "67993ed410683e6c20c5f757",
      benefitCategory: "Cancer & Specialized Screenings",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e4c",
          value: "Age 45-85",
        },
        {
          _id: "679f6beec4e25f230f7f1e4d",
          value: "No symptoms of colorectal disease",
        },
        {
          _id: "679f6beec4e25f230f7f1e4e",
          heading: "Average risk for colorectal cancer, meaning:",
          value: [
            "No personal history of adenomatous polyps, colorectal cancer, or inflammatory\nbowel disease",
            "No family history of colorectal cancers, adenomatous polyps, or hereditary\nconditions",
          ],
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e4f",
          value: "Once every 3 years",
        },
      ],
      benefitName: "Colorectal cancer blood-based biomarker screening tests",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "20% of Medicare-approved amount",
        description: [
          {
            _id: "679f6beec4e25f230f7f1eb7",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1eb8",
            value:
              "Additional facility copayment for hospital outpatient setting",
          },
        ],
      },
      _id: "679a714f28f8292693b83f24",
      benefitCategory: "Cancer & Specialized Screenings",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eb9",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1eba",
          value: "Not applicable",
        },
      ],
      benefitName: "Macular degeneration tests & treatment",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Substance Use & Pain Management": [
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e3a",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "67992df910683e6c20c5f750",
      benefitCategory: "Substance Use & Pain Management",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e3b",
          value:
            "Must have persistent or recurring pain lasting longer than 3 months",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e3c",
          value: "Not applicable",
        },
      ],
      benefitName: "Chronic pain management & treatment services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f5c",
            value: "No copayments at Opioid Treatment Programs (OTPs)",
          },
          {
            _id: "679f6beec4e25f230f7f1f5d",
            value: "Part B deductible applies for supplies/medications",
          },
          {
            _id: "679f6beec4e25f230f7f1f5e",
            value: "Standard copayments apply for doctor visits",
          },
        ],
      },
      _id: "679a96a76bbbe7b66d7f5371",
      benefitCategory: "Substance Use & Pain Management",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f5f",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f60",
          value: "Not applicable",
        },
      ],
      benefitName: "Opioid Use Disorder treatment services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Diagnostic & Laboratory Services": [
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e3d",
            value: "For Medicare-approved tests",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "6799331010683e6c20c5f754",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e3e",
          value: "Must be medically necessary",
        },
        {
          _id: "679f6beec4e25f230f7f1e3f",
          value: "Must be ordered by Medicare-enrolled provider",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e40",
          value: "Not applicable",
        },
      ],
      benefitName: "Clinical laboratory tests ",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e44",
            value: "When provider accepts assignment",
          },
          {
            _id: "679f6beec4e25f230f7f1e45",
            heading: "Note: If polyp/tissue removal\noccurs:",
            value: [
              "15% of Medicare-approved amount for doctor's services",
              "15% facility coinsurance in hospital outpatient/surgical center",
              "Part B deductible doesn't apply",
            ],
          },
        ],
        bold: "$0 for screening tests",
      },
      _id: "67993b0d10683e6c20c5f756",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e46",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e47",
          value: "High risk: Once every 24 months",
        },
        {
          _id: "679f6beec4e25f230f7f1e48",
          value: "Not high risk: Once every 120 months",
        },
        {
          _id: "679f6beec4e25f230f7f1e49",
          value: "48 months after previous flexible sigmoidoscopy",
        },
        {
          _id: "679f6beec4e25f230f7f1e4a",
          value: "Follow-up covered after positive stool-based test",
        },
      ],
      benefitName: "Colonoscopies",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e67",
            value: "For Medicare-covered clinical diagnostic laboratory tests",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679948e530d96d1c09488a57",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e68",
          value: "Must be medically necessary",
        },
        {
          _id: "679f6beec4e25f230f7f1e69",
          value: "Must be ordered by doctor or provider",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e6a",
          value: "Not applicable",
        },
      ],
      benefitName: "Diagnostic laboratory tests",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e6b",
            value: [
              "Doctor's office/testing facility: 20% of Medicare-approved amount",
              "Hospital outpatient: Copayment (may exceed 20%, but cannot exceed Part A hospital\nstay deductible)",
            ],
            heading: "After meeting Part B deductible Additional costs:",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "67994c7230d96d1c09488a59",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e6c",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e6d",
          value: "Not applicable",
        },
      ],
      benefitName: "Diagnostic non-laboratory tests",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e72",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1e73",
            value: "Additional copayment for hospital outpatient setting",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "6799506d30d96d1c09488a5b",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e74",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e75",
          value: "Not applicable",
        },
      ],
      benefitName: "Eye exams (for diabetes)",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e79",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679953c730d96d1c09488a5d",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e7a",
          value: "Must be age 45 or older",
        },
        {
          _id: "679f6beec4e25f230f7f1e7b",
          value: "Requires doctor referral",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e7c",
          value: "Once every 12 month",
        },
      ],
      benefitName: "Fecal occult blood tests (screening)",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e80",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1e81",
            value: "Additional copayment for hospital outpatient setting",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a6a4028f8292693b83f15",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e82",
          value: [
            "Diabetes",
            "Family history of glaucoma",
            "African American and 50+",
            "Hispanic and 65+",
          ],
          heading: "Must have at least one high-risk condition:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e83",
          value: "Once every 12 months",
        },
      ],
      benefitName: "Glaucoma screenings",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "$0 - You pay nothing",
        description: [
          {
            _id: "679f6beec4e25f230f7f1ec1",
            value: "When provider accepts assignment",
          },
        ],
      },
      _id: "679a722f28f8292693b83f27",
      benefitCategory: "Diagnostic & Laboratory Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ec2",
          value: "Age 45-85",
        },
        {
          _id: "679f6beec4e25f230f7f1ec3",
          value: "No symptoms of colorectal disease",
        },
        {
          _id: "679f6beec4e25f230f7f1ec4",
          heading: "Average risk for colorectal cancer:",
          value: [
            "No personal history of polyps, cancer, or inflammatory bowel disease",
            "No family history of colorectal cancers or related conditions",
          ],
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ec5",
          value: "Once every 3 years",
        },
      ],
      benefitName: "Multi-target stool DNA tests",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Miscellaneous Services": [
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e50",
            value: "Medicare does not cover concierge care fees",
          },
        ],
        bold: "100% of membership fee",
      },
      _id: "67993fee10683e6c20c5f758",
      benefitCategory: "Miscellaneous Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e51",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e52",
          value: "Not applicable",
        },
      ],
      benefitName: "Concierge care",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        bold: "100% (not covered)",
        description: [],
      },
      _id: "679a6b4a28f8292693b83f17",
      benefitCategory: "Miscellaneous Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e88",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e89",
          value: "Not applicable",
        },
      ],
      benefitName: "Gym memberships & fitness programs",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1efa",
            value: "For 2024,",
          },
          {
            _id: "679f6beec4e25f230f7f1efb",
            value: "Days 1-60: $1,632 deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1efc",
            value: "Days 61-90: $408 per day",
          },
          {
            _id: "679f6beec4e25f230f7f1efd",
            value: "Days 91+: $816 per day (lifetime reserve days)",
          },
          {
            _id: "679f6beec4e25f230f7f1efe",
            value: "After lifetime reserve days: All costs",
          },
        ],
      },
      _id: "679a7ccd28f8292693b83f35",
      benefitCategory: "Miscellaneous Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eff",
          value: [
            "Care from Medicare-certified institution",
            "Review committee approval",
            "Written election filed",
            "May require 1-5 year wait after cancellation",
          ],
          heading: "Must meet all conditions:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f00",
          value: "Not applicable",
        },
      ],
      benefitName:
        "Religious nonmedical health care institution items & services",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f1b",
            value: "After Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f1c",
            value: "Similar to in-person visit costs",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a873128f8292693b83f3c",
      benefitCategory: "Miscellaneous Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f1d",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f1e",
          value: "Not applicable",
        },
      ],
      benefitName: "Telehealth",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f2a",
            value: "After Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a885428f8292693b83f3f",
      benefitCategory: "Miscellaneous Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f2b",
          value: "Prior discussion with provider about these visits",
        },
        {
          _id: "679f6beec4e25f230f7f1f2c",
          value: "Verbal consent documented in medical record",
        },
        {
          _id: "679f6beec4e25f230f7f1f2d",
          value: "Not related to visit in past 7 days",
        },
        {
          _id: "679f6beec4e25f230f7f1f2e",
          value: "Not leading to visit within 24 hours",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f2f",
          value: "Not applicable",
        },
      ],
      benefitName: "Virtual check-ins",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Diabetes Care": [
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e53",
            value: "Not applicable",
          },
        ],
      },
      _id: "679940a910683e6c20c5f759",
      benefitCategory: "Diabetes Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e54",
          value: [
            "Have diabetes mellitus",
            "Take insulin or have history of low blood sugar",
            "Have prescription for testing supplies",
            "Completed training for monitor use",
            "Make routine in-person or approved telehealth visits",
            "Have testing instructions from doctor",
          ],
          heading: "Must meet all requirements:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e55",
          value: "Not applicable",
        },
      ],
      benefitName: "Continuous glucose monitors",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e64",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679947ba30d96d1c09488a56",
      benefitCategory: "Diabetes Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e65",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e66",
          value: "Not applicable",
        },
      ],
      benefitName: "Diabetes self-management training",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e84",
            value: "After meeting Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1e85",
            value: "Note: Supplier must\naccept assignment",
          },
        ],
        bold: "20% of Medicare-approved amount",
      },
      _id: "679a6add28f8292693b83f16",
      benefitCategory: "Diabetes Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e86",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e87",
          value: "Not applicable",
        },
      ],
      benefitName: "Glucose control solutions",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ea9",
            value: "$35 monthly cap per insulin product",
          },
          {
            _id: "679f6beec4e25f230f7f1eaa",
            value: "No deductible required",
          },
          {
            _id: "679f6beec4e25f230f7f1eab",
            value: "3-month supply: Maximum $105",
          },
          {
            _id: "679f6beec4e25f230f7f1eac",
            value:
              "Insulin-related supplies: 100% cost (unless covered by Part D)",
          },
        ],
      },
      _id: "679a6f6b28f8292693b83f20",
      benefitCategory: "Diabetes Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ead",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1eae",
          value: "Not applicable",
        },
      ],
      benefitName: "Insulin",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  Vaccines: [
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e7d",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a69e428f8292693b83f14",
      benefitCategory: "Vaccines",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e7e",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e7f",
          value: "Not applicable",
        },
      ],
      benefitName: "Flu shots",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1e8e",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a6c6228f8292693b83f1a",
      benefitCategory: "Vaccines",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1e8f",
          value: [
            "Hemophilia with factors VIII or IX",
            "End-Stage Renal Disease",
            "Diabetes",
            "Living with Hepatitis B carrier",
            "Healthcare worker exposure",
            "Other risk factors (check with provider)",
          ],
          heading: "Medium or high risk due to:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1e90",
          value: "Not applicable",
        },
      ],
      benefitName: "Hepatitis B shots",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ee9",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a7a4f28f8292693b83f31",
      benefitCategory: "Vaccines",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eea",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1eeb",
          value: "Not applicable",
        },
      ],
      benefitName: "Pneumococcal shots",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f3e",
            value: "When provider accepts assignment",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a8b8628f8292693b83f43",
      benefitCategory: "Vaccines",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f3f",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f40",
          value: "Not applicable",
        },
      ],
      benefitName: "Coronavirus disease 2019 (COVID-19) vaccine",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Palliative & Long-term Care": [
    {
      benefitCost: {
        bold: "100% (not covered)",
        description: [],
      },
      _id: "679a6fbd28f8292693b83f21",
      benefitCategory: "Palliative & Long-term Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eaf",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1eb0",
          value: "Not applicable",
        },
      ],
      benefitName: "Long-term care",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1eca",
            value: "Not applicable",
          },
        ],
      },
      _id: "679a73ae28f8292693b83f29",
      benefitCategory: "Palliative & Long-term Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1ecb",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1ecc",
          value: "Not applicable",
        },
      ],
      benefitName: "Nursing home care",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f06",
            value: "For 2024,",
          },
          {
            _id: "679f6beec4e25f230f7f1f07",
            value: "Days 1-20: $0",
          },
          {
            _id: "679f6beec4e25f230f7f1f08",
            value: "Days 21-100: $204 per day",
          },
          {
            _id: "679f6beec4e25f230f7f1f09",
            value: "Days 101+: All costs",
          },
        ],
      },
      _id: "679a7ec128f8292693b83f37",
      benefitCategory: "Palliative & Long-term Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f0a",
          value: [
            "Have Part A with available benefit days",
            "Qualifying hospital stay",
            "Enter within 30 days of hospital",
            "Need daily skilled care",
            "Medicare-certified facility",
            "Doctor's order",
          ],
          heading: "Must meet all conditions:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f0b",
          value: "Not applicable",
        },
      ],
      benefitName: "Skilled nursing facility care",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f41",
            value: "With Medicare-approved provider",
          },
        ],
        bold: "$0 - You pay nothing",
      },
      _id: "679a8e2ccf134ac7cbd97938",
      benefitCategory: "Palliative & Long-term Care",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f42",
          value: [
            "Have Medicare Part A",
            "Certified terminally ill (6 months or less)",
            "Accept comfort care over curative care",
            "Sign statement choosing hospice care",
          ],
          heading: "Must meet all conditions:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f43",
          value: "Not applicable",
        },
      ],
      benefitName: "Hospice care",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Medications & Prescription Support": [
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1ed7",
            value:
              "Up to 20% of Medicare-approved amount after Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1ed8",
            value: "Coinsurance may vary based on drug price",
          },
          {
            _id: "679f6beec4e25f230f7f1ed9",
            value: "No cost for home health nurse injection visits",
          },
        ],
      },
      _id: "679a76c028f8292693b83f2d",
      benefitCategory: "Medications & Prescription Support",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1eda",
          value: [
            "Medicare home health services eligibility",
            "Postmenopausal osteoporosis-related fracture",
            "Inability to self-inject",
            "No available family/caregiver support for injection",
          ],
          heading: "Must be a woman with:",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1edb",
          value: "Not applicable",
        },
      ],
      benefitName: "Osteoporosis drugs",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f59",
            value: "After meeting Part B deductible",
          },
        ],
        bold: "Up to 20% of Medicare-approved amount",
      },
      _id: "679a90fccf134ac7cbd9793e",
      benefitCategory: "Medications & Prescription Support",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f5a",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f5b",
          value: "Not applicable",
        },
      ],
      benefitName: "Prescription drugs (outpatient)",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
  "Mental Health Services": [
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f0c",
            value: '$0 during yearly "Wellness" visit',
          },
          {
            _id: "679f6beec4e25f230f7f1f0d",
            value:
              "20% of Medicare-approved amount for other visits after Part B deductible",
          },
        ],
      },
      _id: "679a7fb628f8292693b83f38",
      benefitCategory: "Mental Health Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f0e",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f0f",
          value: "Once every 6 months",
        },
        {
          _id: "679f6beec4e25f230f7f1f10",
          value: "More often with multiple providers",
        },
      ],
      benefitName: "Social determinants of health risk assessment",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f44",
            value: "For 2024,",
          },
          {
            _id: "679f6beec4e25f230f7f1f45",
            value: "Days 1-60: $1,632 deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f46",
            value: "Days 61-90: $408 per day",
          },
          {
            _id: "679f6beec4e25f230f7f1f47",
            value: "Days 91+: $816 per day (lifetime reserve days)",
          },
          {
            _id: "679f6beec4e25f230f7f1f48",
            value: "After lifetime reserve days: All costs",
          },
          {
            _id: "679f6beec4e25f230f7f1f49",
            value: "20% for doctor services",
          },
        ],
      },
      _id: "679a8e9acf134ac7cbd97939",
      benefitCategory: "Mental Health Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f4a",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f4b",
          value: "Not applicable",
        },
      ],
      benefitName: "Mental health care (inpatient)",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f4c",
            value: "Depression screening: $0",
          },
          {
            _id: "679f6beec4e25f230f7f1f4d",
            value: "Other services: 20% after Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f4e",
            value: "Additional hospital copayment may apply",
          },
        ],
      },
      _id: "679a8f6ccf134ac7cbd9793a",
      benefitCategory: "Mental Health Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f4f",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f50",
          value: "Not applicable",
        },
      ],
      benefitName: "Mental health care (outpatient)",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
    {
      benefitCost: {
        description: [
          {
            _id: "679f6beec4e25f230f7f1f51",
            value:
              "Percentage of Medicare-approved amount for professional services",
          },
          {
            _id: "679f6beec4e25f230f7f1f52",
            value: "Coinsurance for each day after Part B deductible",
          },
          {
            _id: "679f6beec4e25f230f7f1f53",
            value: "Must accept assignment",
          },
        ],
      },
      _id: "679a8fbacf134ac7cbd9793c",
      benefitCategory: "Mental Health Services",
      benefitEligibility: [
        {
          _id: "679f6beec4e25f230f7f1f54",
          value: "Not applicable",
        },
      ],
      benefitFrequency: [
        {
          _id: "679f6beec4e25f230f7f1f55",
          value: "Not applicable",
        },
      ],
      benefitName: "Mental health care (partial hospitalization)",
      benefitProvider: "Original Medicare (Parts A and B)",
    },
  ],
};
