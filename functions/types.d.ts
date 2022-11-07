export interface Message {
    AlarmName:                          string;
    AlarmDescription:                   null;
    AWSAccountId:                       string;
    AlarmConfigurationUpdatedTimestamp: string;
    NewStateValue:                      string;
    NewStateReason:                     string;
    StateChangeTime:                    string;
    Region:                             string;
    AlarmArn:                           string;
    OldStateValue:                      string;
    OKActions:                          any[];
    AlarmActions:                       string[];
    InsufficientDataActions:            any[];
    Trigger:                            Trigger;
}

export interface SNSEvent {
    Records: Record[];
    [key:string]: any;
}

export interface Trigger {
    MetricName:                       string;
    Namespace:                        string;
    StatisticType:                    string;
    Statistic:                        string;
    Unit:                             null;
    Dimensions:                       any[];
    Period:                           number;
    EvaluationPeriods:                number;
    DatapointsToAlarm:                number;
    ComparisonOperator:               string;
    Threshold:                        number;
    TreatMissingData:                 string;
    EvaluateLowSampleCountPercentile: string;
}

export interface Record {
    EventSource:          string;
    EventVersion:         string;
    EventSubscriptionArn: string;
    Sns:                  Sns;
}

export interface Sns {
    Type:              string;
    MessageId:         string;
    TopicArn:          string;
    Subject:           string;
    Message:           string;
    Timestamp:         Date;
    SignatureVersion:  string;
    Signature:         string;
    SigningCertUrl:    string;
    UnsubscribeUrl:    string;
    MessageAttributes: MessageAttributes;
}