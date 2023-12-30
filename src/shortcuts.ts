export const shortcuts = [
  { key: "SHIFT CMD P, F1", description: "Show description Palette", category: "General" },
  { key: "CMD P", description: "Quick Open, Go to File…", category: "General" },
  { key: "SHIFT CMD N", description: "New window/instance", category: "General" },
  { key: "CMD W", description: "Close window/instance", category: "General" },
  { key: "CMD ,", description: "User Settings", category: "General" },
  { key: "CMD S", description: "Keyboard Shortcuts", category: "General" },
  {
    key: "CMD X",
    description: "Cut line (empty selection)",
    category: "Basic editing",
  },
  {
    key: "CMD C",
    description: "Copy line (empty selection)",
    category: "Basic editing",
  },
  {
    key: "OPTION DOWN / OPTION   UP ",
    description: "Move line down/up",
    category: "Basic editing",
  },
  {
    key: "SHIFT  OPTION   DOWN  / SHIFT  OPTION   UP ",
    description: "Copy line down/up",
    category: "Basic editing",
  },
  { key: "SHIFT CMD K", description: "Delete line", category: "Basic editing" },
  {
    key: "CMD Enter / SHIFT CMD Enter",
    description: "Insert line below/above",
    category: "Basic editing",
  },
  {
    key: "SHIFT CMD \\",
    description: "Jump to matching bracket",
    category: "Basic editing",
  },
  {
    key: "CMD ] / CMD [",
    description: "Indent/outdent line",
    category: "Basic editing",
  },
  {
    key: "Home / End",
    description: "Go to beginning/end of line",
    category: "Basic editing",
  },
  {
    key: "CMD UP  / CMD DOWN ",
    description: "Go to beginning/end of file",
    category: "Basic editing",
  },
  {
    key: "⌃PgUp / ⌃PgDn",
    description: "Scroll line up/down",
    category: "Basic editing",
  },
  {
    key: "CMD PgUp /CMD PgDn",
    description: "Scroll page up/down",
    category: "Basic editing",
  },
  {
    key: "OPTION  CMD [ / OPTION  CMD ]",
    description: "Fold/unfold region",
    category: "Basic editing",
  },
  {
    key: "CMD K CMD [ / CMD K CMD ]",
    description: "Fold/unfold all subregions",
    category: "Basic editing",
  },
  {
    key: "CMD K CMD 0 / CMD K CMD J",
    description: "Fold/unfold all regions",
    category: "Basic editing",
  },
  { key: "CMD K CMD C", description: "Add line comment", category: "Basic editing" },
  {
    key: "CMD K CMD U",
    description: "Remove line comment",
    category: "Basic editing",
  },
  { key: "CMD /", description: "Toggle line comment", category: "Basic editing" },
  { key: "SHIFT OPTION  A", description: "Toggle block comment", category: "Basic editing" },
  { key: "OPTION  Z", description: "Toggle word wrap", category: "Basic editing" },
  {
    key: "OPTION   + click",
    description: "Insert cursor",
    category: "Multi-cursor and selection",
  },
  {
    key: "OPTION  CMD UP ",
    description: "Insert cursor above",
    category: "Multi-cursor and selection",
  },
  {
    key: "OPTION  CMD DOWN ",
    description: "Insert cursor below",
    category: "Multi-cursor and selection",
  },
  {
    key: "CMD U",
    description: "Undo last cursor operation",
    category: "Multi-cursor and selection",
  },
  {
    key: "SHIFT OPTION  I",
    description: "Insert cursor at end of each line selected",
    category: "Multi-cursor and selection",
  },
  {
    key: "CMD L",
    description: "Select current line",
    category: "Multi-cursor and selection",
  },
  {
    key: "SHIFT CMD L",
    description: "Select all occurrences of current selection",
    category: "Multi-cursor and selection",
  },
  {
    key: "CMD F2",
    description: "Select all occurrences of current word",
    category: "Multi-cursor and selection",
  },
  {
    key: "⌃SHIFT CMD → / ←",
    description: "Expand / shrink selection",
    category: "Multi-cursor and selection",
  },
  {
    key: "SHIFT OPTION   + drag mouse",
    description: "Column (box) selection",
    category: "Multi-cursor and selection",
  },
  {
    key: "SHIFT OPTION  CMD UP  / DOWN ",
    description: "Column (box) selection up/down",
    category: "Multi-cursor and selection",
  },
  {
    key: "SHIFT OPTION  CMD ← / →",
    description: "Column (box) selection left/right",
    category: "Multi-cursor and selection",
  },
  {
    key: "SHIFT OPTION  CMD PgUp",
    description: "Column (box) selection page up",
    category: "Multi-cursor and selection",
  },
  {
    key: "SHIFT OPTION  CMD PgDn",
    description: "Column (box) selection page down",
    category: "Multi-cursor and selection",
  },
  {
    key: "CMD F",
    description: "Find",
    category: "Search and replace"
  },
  {
    key: "OPTION CMD F",
    description: "Replace",
    category: "Search and replace"
  },
  {
    key: "CMD G / SHIFT CMD G",
    description: "Find next/previous",
    category: "Search and replace"
  },
  {
    key: "OPTION Enter",
    description: "Select all occurrences of Find match",
    category: "Search and replace"
  },
  {
    key: "CMD D",
    description: "Add selection to next Find match",
    category: "Search and replace"
  },
  {
    key: "CMD K CMD D",
    description: "Move last selection to next Find match",
    category: "Search and replace"
  },
  {
    key: "CTRL Space, CMD I",
    description: "Trigger suggestion",
    category: "Rich languages editing"
  },
  {
    key: "SHIFT CMD Space",
    description: "Trigger parameter hints",
    category: "Rich languages editing"
  },
  {
    key: "SHIFT OPTION F",
    description: "Format document",
    category: "Rich languages editing"
  },
  {
    key: "CMD K CMD F",
    description: "Format selection",
    category: "Rich languages editing"
  },
  {
    key: "F12",
    description: "Go to Definition",
    category: "Rich languages editing"
  },
  {
    key: "OPTION F12",
    description: "Peek Definition",
    category: "Rich languages editing"
  },
  {
    key: "CMD K F12",
    description: "Open Definition to the side",
    category: "Rich languages editing"
  },
  {
    key: "CMD .",
    description: "Quick Fix",
    category: "Rich languages editing"
  },
  {
    key: "SHIFT F12",
    description: "Show References",
    category: "Rich languages editing"
  },
  {
    key: "F2",
    description: "Rename Symbol",
    category: "Rich languages editing"
  },
  {
    key: "CMD K CMD X",
    description: "Trim trailing whitespace",
    category: "Rich languages editing"
  },
  {
    key: "CMD K M",
    description: "Change file language",
    category: "Rich languages editing"
  },
  {
    key: "CMD T",
    description: "Show all Symbols",
    category: "Navigation"
  },
  {
    key: "CTRL G",
    description: "Go to Line...",
    category: "Navigation"
  },
  {
    key: "CMD P",
    description: "Go to File...",
    category: "Navigation"
  },
  {
    key: "SHIFT CMD O",
    description: "Go to Symbol...",
    category: "Navigation"
  },
  {
    key: "SHIFT CMD M",
    description: "Show Problems panel",
    category: "Navigation"
  },
  {
    key: "F8 / SHIFT F8",
    description: "Go to next/previous error or warning",
    category: "Navigation"
  },
  {
    key: "CTRL SHIFT Tab",
    description: "Navigate editor group history",
    category: "Navigation"
  },
  {
    key: "CTRL - / CTRL SHIFT -",
    description: "Go back/forward",
    category: "Navigation"
  },
  {
    key: "CTRL SHIFT M",
    description: "Toggle Tab moves focus",
    category: "Navigation"
  },
  {
    key: "CMD W",
    description: "Close editor",
    category: "Editor management"
  },
  {
    key: "CMD K F",
    description: "Close folder",
    category: "Editor management"
  },
  {
    key: "CMD \\",
    description: "Split editor",
    category: "Editor management"
  },
  {
    key: "CMD 1 / CMD 2 / CMD 3",
    description: "Focus into 1st, 2nd, 3rd editor group",
    category: "Editor management"
  },
  {
    key: "CMD K CMD < / CMD K CMD >",
    description: "Focus into previous/next editor group",
    category: "Editor management"
  },
  {
    key: "CMD K SHIFT CMD < / CMD K SHIFT CMD >",
    description: "Move editor left/right",
    category: "Editor management"
  },
  {
    key: "CMD K < / CMD K >",
    description: "Move active editor group",
    category: "Editor management"
  },
  {
    key: "CMD N",
    description: "New File",
    category: "File management"
  },
  {
    key: "CMD O",
    description: "Open File...",
    category: "File management"
  },
  {
    key: "CMD S",
    description: "Save",
    category: "File management"
  },
  {
    key: "SHIFT CMD S",
    description: "Save As...",
    category: "File management"
  },
  {
    key: "OPTION CMD S",
    description: "Save All",
    category: "File management"
  },
  {
    key: "CMD W",
    description: "Close",
    category: "File management"
  },
  {
    key: "CMD K CMD W",
    description: "Close All",
    category: "File management"
  },
  {
    key: "SHIFT CMD T",
    description: "Reopen closed editor",
    category: "File management"
  },
  {
    key: "CMD K Enter",
    description: "Keep preview mode editor open",
    category: "File management"
  },
  {
    key: "CTRL Tab / CTRL SHIFT Tab",
    description: "Open next / previous",
    category: "File management"
  },
  {
    key: "CMD K P",
    description: "Copy path of active file",
    category: "File management"
  },
  {
    key: "CMD K R",
    description: "Reveal active file in Finder",
    category: "File management"
  },
  {
    key: "CMD K O",
    description: "Show active file in new window/instance",
    category: "File management"
  },
  {
    key: "CTRL CMD F",
    description: "Toggle full screen",
    category: "Display"
  },
  {
    key: "OPTION CMD 0",
    description: "Toggle editor layout (horizontal/vertical)",
    category: "Display"
  },
  {
    key: "CMD = / SHIFT CMD -",
    description: "Zoom in/out",
    category: "Display"
  },
  {
    key: "CMD B",
    description: "Toggle Sidebar visibility",
    category: "Display"
  },
  {
    key: "SHIFT CMD E",
    description: "Show Explorer / Toggle focus",
    category: "Display"
  },
  {
    key: "SHIFT CMD F",
    description: "Show Search",
    category: "Display"
  },
  {
    key: "CTRL SHIFT G",
    description: "Show Source Control",
    category: "Display"
  },
  {
    key: "SHIFT CMD D",
    description: "Show Debug",
    category: "Display"
  },
  {
    key: "SHIFT CMD X",
    description: "Show Extensions",
    category: "Display"
  },
  {
    key: "SHIFT CMD H",
    description: "Replace in files",
    category: "Display"
  },
  {
    key: "SHIFT CMD J",
    description: "Toggle Search details",
    category: "Display"
  },
  {
    key: "SHIFT CMD U",
    description: "Show Output panel",
    category: "Display"
  },
  {
    key: "SHIFT CMD V",
    description: "Open Markdown preview",
    category: "Display"
  },
  {
    key: "CMD K V",
    description: "Open Markdown preview to the side",
    category: "Display"
  },
  {
    key: "CMD K Z",
    description: "Zen Mode (Esc Esc to exit)",
    category: "Display"
  },
  {
    key: "F9",
    description: "Toggle breakpoint",
    category: "Debug"
  },
  {
    key: "F5",
    description: "Start/Continue",
    category: "Debug"
  },
  {
    key: "F11 / SHIFT F11",
    description: "Step into/ out",
    category: "Debug"
  },
  {
    key: "F10",
    description: "Step over",
    category: "Debug"
  },
  {
    key: "SHIFT F5",
    description: "Stop",
    category: "Debug"
  },
  {
    key: "CMD K CMD I",
    description: "Show hover",
    category: "Debug"
  },
  {
    key: "CTRL `",
    description: "Show integrated terminal",
    category: "Integrated terminal"
  },
  {
    key: "CTRL SHIFT `",
    description: "Create new terminal",
    category: "Integrated terminal"
  },
  {
    key: "CMD C",
    description: "Copy selection",
    category: "Integrated terminal"
  },
  {
    key: "CMD UP / DOWN",
    description: "Scroll up/down",
    category: "Integrated terminal"
  },
  {
    key: "PgUp / PgDn",
    description: "Scroll page up/down",
    category: "Integrated terminal"
  },
  {
    key: "CMD Home / End",
    description: "Scroll to top/bottom",
    category: "Integrated terminal"
  }
];
