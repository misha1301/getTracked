type TrackerStatusCode = 'Active' | 'UnActive' | 'Draft' | 'Failed';

type Rule = {
  ruleId: number;
  title: string;
  description: string;
  code: string;
};

type Runner = {
  title: string;
  description: string;
  lastRunDate: string;
};

type TrackerStatus = {
  code: string;
  name: string;
};

type Tracker = {
  trackableItemId: 1;
  title: string;
  description: string;
  webUrl: string;
  isPaginable: boolean;
  paginationDelectionKey: string;
  pagesNumber: 'PagesNumber';
  lastUpdateDate: typeof Date;
  lastErrorMessage: null;
  status: TrackerStatus;
  ruleId: number;
  resultSetNumber: number;
  trackingResultSets: [
    {
      text: string;
      status: {
        code: string;
        name: string;
      };
    },
  ];
};

type TrackerStatistics = TrackerStatus & {
  code: TrackerStatusCode;
  number: number;
};

type StatisticsMap = {
  [key in TrackerStatusCode]: TrackerStatistics;
};

type TrackersInfo = {
  trackerId: number;
  title: string;
  description: string;
  statistics: StatisticsMap[keyof StatisticsMap][];
};

type TrackersInfoList = {
  trackers: TrackersInfo[];
};

type RulesInfo = {
  rules: Rule[];
  totalNumber: number;
};

type ErrorCodeDetail = {
  propertyName: string;
  errorMessage: string;
};

type ErrorCode = {
  statusCode: number;
  errorCode: string;
  errorMessage: string;
  details: ErrorCodeDetail[] | null;
};