// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Part from "./Part";

export class FramePart extends Part {
  constructor(name: string, code: string) {
    super(name, "frame", code);
  }
}
