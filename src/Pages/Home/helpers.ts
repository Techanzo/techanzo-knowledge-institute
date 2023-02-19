import { Course, Lecture, Module, Topic } from './types';

type TopicWithoutSequenceNum = Omit<Topic, 'sequenceNum'>;

function injectSequenceNumInTopic(topics: TopicWithoutSequenceNum[], lectureSequenceNum: string) {
  return topics.map((topic, index) => {
    const topicNum = `${index + 1}`.padStart(2, '0');
    const sequenceNum = `${lectureSequenceNum}.${topicNum}`;
    return { ...topic, sequenceNum };
  });
}

type LectureWithoutSequenceNum = Omit<Lecture, 'sequenceNum' | 'topics'> & {
  topics?: TopicWithoutSequenceNum[];
};

function deepInjectSequenceNumInLecture(lectures: LectureWithoutSequenceNum[], lastIndex = 0) {
  return lectures.map((lecture, index) => {
    const sequenceNum = `${lastIndex + index + 1}`.padStart(2, '0');
    return {
      ...lecture,
      topics: lecture.topics ? injectSequenceNumInTopic(lecture.topics, sequenceNum) : undefined,
      sequenceNum,
    };
  });
}

type ModuleWithoutSequenceNum = Omit<Module, 'sequenceNum' | 'lectures'> & {
  lectures: LectureWithoutSequenceNum[];
};

function deepInjectSequenceNumInModule(modules: ModuleWithoutSequenceNum[]) {
  return modules.map((module, index, self) => {
    const sequenceNum = `${index + 1}`.padStart(2, '0');
    const totalLecturesInPreviousModules = self.reduce((acc, item, idx) => {
      if (idx < index) {
        acc += item.lectures.length;
      }
      return acc;
    }, 0);
    return {
      ...module,
      lectures: deepInjectSequenceNumInLecture(module.lectures, totalLecturesInPreviousModules),
      sequenceNum,
    };
  });
}

type CourseWithoutSequenceNum = Omit<Course, 'sequenceNum' | 'details'> & {
  details: Omit<Course['details'], 'modules'> & { modules: ModuleWithoutSequenceNum[] };
};

export function deepInjectSequenceNum(courses: CourseWithoutSequenceNum[]) {
  return courses.map((course) => ({
    ...course,
    details: {
      ...course.details,
      modules: deepInjectSequenceNumInModule(course.details.modules),
    },
  }));
}
