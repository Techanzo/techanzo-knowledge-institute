export interface Topic {
  sequenceNum: string;
  name: string;
  description?: string | string[];
  duration: number;
  tags?: string[];
}

export interface Lecture {
  sequenceNum: string;
  name: string;
  /** duration in minutes */
  duration: number;
  tags?: string[];
  topics?: Topic[];
}

export interface Module {
  sequenceNum: string;
  name: string;
  description: string | string[];
  lectures: Lecture[];
  tags?: string[];
  color?: string;
}

export interface Course {
  name: string;
  details: {
    title: string;
    description: string | string[];
    modules: Module[];
  };
}
