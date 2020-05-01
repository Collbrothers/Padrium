export * from "./structures/Config";
export * from "./structures/Client/PadClient";
export * from "./structures/base/Command";
export * from "./structures/base/Event";
export * from "./interfaces/CommandData";
export * from "./database/Guild";

require("./structures/extend/Guild")();