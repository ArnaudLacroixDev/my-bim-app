import {
  SectionGeometry
} from '@tridyme/aec';

const calculations = {
  // OUTPUTS
  outputs: (inputs) => {
    return {
      A: calculations.A(inputs),
      Ixx: calculations.Ixx(inputs)
    }
  },
  // CALCULATION FUNCTIONS
  A: (inputs) => {
    const {
      b,
      h
    } = inputs;
    const surface = new SectionGeometry.RectangularSection({ b, h }).A;
    return surface;
  },

  Ixx: (inputs) => {
    const {
      b,
      h
    } = inputs;
    return b * h ** 3 / 12;
  }
}

export default calculations;