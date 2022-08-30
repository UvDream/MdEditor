import vs2015 from "highlight.js/styles/vs2015.css";
import github from "highlight.js/styles/github.css";
import vs from "highlight.js/styles/vs.css";
import xcode from "highlight.js/styles/xcode.css";
import github_dark from "highlight.js/styles/github-dark.css";
import android_studio from "highlight.js/styles/androidstudio.css";
import atom_one_dark from "highlight.js/styles/atom-one-dark.css";
import atom_one_light from "highlight.js/styles/atom-one-light.css";
import default_theme from "highlight.js/styles/default.css";
import a11y_dark from "highlight.js/styles/a11y-dark.css";
import a11y_light from "highlight.js/styles/a11y-light.css";
import agate from "highlight.js/styles/agate.css";
import an_old_hope from "highlight.js/styles/an-old-hope.css";
import arduino_light from "highlight.js/styles/arduino-light.css";
import arta from "highlight.js/styles/arta.css";
import ascetic from "highlight.js/styles/ascetic.css";
import atom_one_dark_reasonable from "highlight.js/styles/atom-one-dark-reasonable.css";
import brown_paper from "highlight.js/styles/brown-paper.css";
import codepen_embed from "highlight.js/styles/codepen-embed.css";
import color_brewer from "highlight.js/styles/color-brewer.css";
import dark from "highlight.js/styles/dark.css";
import devibeans from "highlight.js/styles/devibeans.css";
import docco from "highlight.js/styles/docco.css";
import far from "highlight.js/styles/far.css";
import felipec from "highlight.js/styles/felipec.css";
import foundation from "highlight.js/styles/foundation.css";
import github_dark_dimmed from "highlight.js/styles/github-dark-dimmed.css";
import gml from "highlight.js/styles/gml.css";
import googlecode from "highlight.js/styles/googlecode.css";
import gradient_dark from "highlight.js/styles/gradient-dark.css";
import gradient_light from "highlight.js/styles/gradient-light.css";
// import grayscale from "highlight.js/styles/grayscale.css";
import hybrid from "highlight.js/styles/hybrid.css";
import idea from "highlight.js/styles/idea.css";
import intellij_light from "highlight.js/styles/intellij-light.css";
import ir_black from "highlight.js/styles/ir-black.css";
import isbl_editor_dark from "highlight.js/styles/isbl-editor-dark.css";
import isbl_editor_light from "highlight.js/styles/isbl-editor-light.css";
import kimbie_dark from "highlight.js/styles/kimbie-dark.css";
import kimbie_light from "highlight.js/styles/kimbie-light.css";
import lightfair from "highlight.js/styles/lightfair.css";
import lioshi from "highlight.js/styles/lioshi.css";
import magula from "highlight.js/styles/magula.css";
import mono_blue from "highlight.js/styles/mono-blue.css";
import monokai_sublime from "highlight.js/styles/monokai-sublime.css";
import monokai from "highlight.js/styles/monokai.css";
import night_owl from "highlight.js/styles/night-owl.css";
import nnfx_dark from "highlight.js/styles/nnfx-dark.css";
import nnfx_light from "highlight.js/styles/nnfx-light.css";
import nord from "highlight.js/styles/nord.css";
import obsidian from "highlight.js/styles/obsidian.css";
import panda_syntax_dark from "highlight.js/styles/panda-syntax-dark.css";
import panda_syntax_light from "highlight.js/styles/panda-syntax-light.css";
import paraiso_dark from "highlight.js/styles/paraiso-dark.css";
import paraiso_light from "highlight.js/styles/paraiso-light.css";
import pojoaque from "highlight.js/styles/pojoaque.css";
import purebasic from "highlight.js/styles/purebasic.css";
import qtcreator_dark from "highlight.js/styles/qtcreator-dark.css";
import qtcreator_light from "highlight.js/styles/qtcreator-light.css";
import rainbow from "highlight.js/styles/rainbow.css";
import routeros from "highlight.js/styles/routeros.css";
import school_book from "highlight.js/styles/school-book.css";
import shades_of_purple from "highlight.js/styles/shades-of-purple.css";
import srcery from "highlight.js/styles/srcery.css";
import stackoverflow_dark from "highlight.js/styles/stackoverflow-dark.css";
import stackoverflow_light from "highlight.js/styles/stackoverflow-light.css";
import sunburst from "highlight.js/styles/sunburst.css";
import tokyo_night_dark from "highlight.js/styles/tokyo-night-dark.css";
import tokyo_night_light from "highlight.js/styles/tokyo-night-light.css";
import tomorrow_night_blue from "highlight.js/styles/tomorrow-night-blue.css";
import tomorrow_night_bright from "highlight.js/styles/tomorrow-night-bright.css";
import xt256 from "highlight.js/styles/xt256.css";

export interface CodeThemeType {
  name?: string;
  value?: string;
  code?: string;
}

export const CodeLightThemeList: Array<CodeThemeType> = [
  {
    name: "默认",
    value: "default",
    code: default_theme,
  },
  {
    name: "atom_one_light",
    value: "atom_one_light",
    code: atom_one_light,
  },
  {
    name: "xcode",
    value: "xcode",
    code: xcode,
  },
  {
    name: "vs",
    value: "vs",
    code: vs,
  },
  {
    name: "github",
    value: "github",
    code: github,
  },
  {
    name: "aa11y_light",
    value: "a11y_light",
    code: a11y_light,
  },

  {
    name: "arduino_light",
    value: "arduino_light",
    code: arduino_light,
  },

  {
    name: "ascetic",
    value: "ascetic",
    code: ascetic,
  },
  {
    name: "brown_paper",
    value: "brown_paper",
    code: brown_paper,
  },

  {
    name: "color_brewer",
    value: "color_brewer",
    code: color_brewer,
  },

  {
    name: "docco",
    value: "docco",
    code: docco,
  },

  {
    name: "foundation",
    value: "foundation",
    code: foundation,
  },

  {
    name: "googlecode",
    value: "googlecode",
    code: googlecode,
  },
  {
    name: "gradient_light",
    value: "gradient_light",
    code: gradient_light,
  },
  // {
  //     name: "grayscale",
  //     value: "grayscale",
  //     code: grayscale,
  // },
  // {
  //     name: "idea",
  //     value: "idea",
  //     code: idea,
  // },
  {
    name: "intellij_light",
    value: "intellij_light",
    code: intellij_light,
  },

  {
    name: "isbl_editor_light",
    value: "isbl_editor_light",
    code: isbl_editor_light,
  },
  {
    name: "kimbie_light",
    value: "kimbie_light",
    code: kimbie_light,
  },

  {
    name: "lightfair",
    value: "lightfair",
    code: lightfair,
  },
  {
    name: "magula",
    value: "magula",
    code: magula,
  },
  {
    name: "mono_blue",
    value: "mono_blue",
    code: mono_blue,
  },

  {
    name: "nnfx_light",
    value: "nnfx_light",
    code: nnfx_light,
  },

  {
    name: "panda_syntax_light",
    value: "panda_syntax_light",
    code: panda_syntax_light,
  },
  {
    name: "paraiso_light",
    value: "paraiso_light",
    code: paraiso_light,
  },

  {
    name: "purebasic",
    value: "purebasic",
    code: purebasic,
  },
  {
    name: "qtcreator_light",
    value: "qtcreator_light",
    code: qtcreator_light,
  },

  {
    name: "routeros",
    value: "routeros",
    code: routeros,
  },
  {
    name: "school_book",
    value: "school_book",
    code: school_book,
  },

  {
    name: "stackoverflow_light",
    value: "stackoverflow_light",
    code: stackoverflow_light,
  },
  {
    name: "tokyo_night_light",
    value: "tokyo_night_light",
    code: tokyo_night_light,
  },
];
export const CodeDarkThemeList: Array<CodeThemeType> = [
  {
    name: "atom_one_dark",
    value: "atom_one_dark",
    code: atom_one_dark,
  },
  {
    name: "aa11y_dark",
    value: "a11y_dark",
    code: a11y_dark,
  },
  {
    name: "android_studio",
    value: "android_studio",
    code: android_studio,
  },
  {
    name: "github_dark",
    value: "github_dark",
    code: github_dark,
  },
  {
    name: "vs2015",
    value: "vs2015",
    code: vs2015,
  },
  {
    name: "atom_one_dark_reasonable",
    value: "atom_one_dark_reasonable",
    code: atom_one_dark_reasonable,
  },
  {
    name: "dark",
    value: "dark",
    code: dark,
  },
  {
    name: "github_dark_dimmed",
    value: "github_dark_dimmed",
    code: github_dark_dimmed,
  },
  {
    name: "gradient_dark",
    value: "gradient_dark",
    code: gradient_dark,
  },
  {
    name: "isbl_editor_dark",
    value: "isbl_editor_dark",
    code: isbl_editor_dark,
  },
  {
    name: "kimbie_dark",
    value: "kimbie_dark",
    code: kimbie_dark,
  },
  {
    name: "nnfx_dark",
    value: "nnfx_dark",
    code: nnfx_dark,
  },
  {
    name: "panda_syntax_dark",
    value: "panda_syntax_dark",
    code: panda_syntax_dark,
  },
  {
    name: "paraiso_dark",
    value: "paraiso_dark",
    code: paraiso_dark,
  },
  {
    name: "qtcreator_dark",
    value: "qtcreator_dark",
    code: qtcreator_dark,
  },
  {
    name: "stackoverflow_dark",
    value: "stackoverflow_dark",
    code: stackoverflow_dark,
  },
  {
    name: "tokyo_night_dark",
    value: "tokyo_night_dark",
    code: tokyo_night_dark,
  },
  {
    name: "tomorrow_night_blue",
    value: "tomorrow_night_blue",
    code: tomorrow_night_blue,
  },
  {
    name: "tomorrow_night_bright",
    value: "tomorrow_night_bright",
    code: tomorrow_night_bright,
  },
  {
    name: "agate",
    value: "agate",
    code: agate,
  },
  {
    name: "xt256",
    value: "xt256",
    code: xt256,
  },
  {
    name: "an_old_hope",
    value: "an_old_hope",
    code: an_old_hope,
  },
  {
    name: "arta",
    value: "arta",
    code: arta,
  },
  {
    name: "codepen_embed",
    value: "codepen_embed",
    code: codepen_embed,
  },
  {
    name: "devibeans",
    value: "devibeans",
    code: devibeans,
  },
  {
    name: "far",
    value: "far",
    code: far,
  },
  {
    name: "felipec",
    value: "felipec",
    code: felipec,
  },
  {
    name: "gml",
    value: "gml",
    code: gml,
  },
  {
    name: "hybrid",
    value: "hybrid",
    code: hybrid,
  },
  {
    name: "ir_black",
    value: "ir_black",
    code: ir_black,
  },

  {
    name: "lioshi",
    value: "lioshi",
    code: lioshi,
  },

  {
    name: "monokai_sublime",
    value: "monokai_sublime",
    code: monokai_sublime,
  },
  {
    name: "monokai",
    value: "monokai",
    code: monokai,
  },
  {
    name: "night_owl",
    value: "night_owl",
    code: night_owl,
  },
  {
    name: "nord",
    value: "nord",
    code: nord,
  },
  {
    name: "obsidian",
    value: "obsidian",
    code: obsidian,
  },
  {
    name: "pojoaque",
    value: "pojoaque",
    code: pojoaque,
  },
  {
    name: "rainbow",
    value: "rainbow",
    code: rainbow,
  },
  {
    name: "shades_of_purple",
    value: "shades_of_purple",
    code: shades_of_purple,
  },
  {
    name: "srcery",
    value: "srcery",
    code: srcery,
  },
  {
    name: "sunburst",
    value: "sunburst",
    code: sunburst,
  },
];
export const CodeThemeList: Array<CodeThemeType> = [
  ...CodeLightThemeList,
  ...CodeDarkThemeList,
];
