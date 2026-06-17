// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/R3mark/R3mark/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/R3mark/handler.js",
  client: "/R3mark/client.js",
  bundle: "/R3mark/bundle.js",
  config: "/R3mark/config.js",
  sw: "/R3mark/rizz.sw.js",
};
