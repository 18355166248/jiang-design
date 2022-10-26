interface a {
  name: string;
}

interface b extends a {
  age: number;
}

interface c<inter extends a = b> {
  line?: string;
}

type d<inter extends a = b> = c<inter> & { gender: string };

interface Face {
  name: string;
  age: number;
}

const test11: d<Face> = {
  gender: '1',
  line: '2',
};
