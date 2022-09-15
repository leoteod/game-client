// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import emitter from "tiny-emitter/instance";

export default {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  $on: (...args) => emitter.on(...args),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  $once: (...args) => emitter.once(...args),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  $off: (...args) => emitter.off(...args),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  $emit: (...args) => emitter.emit(...args),
};
