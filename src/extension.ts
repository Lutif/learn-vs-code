import * as vscode from "vscode";
import { shortcuts as backup } from "./shortcuts";

enum BUTTON_ENUM {
  LEARNED = "Mark as Learned",
  BOOKMARK = "Bookmark",
}
interface Shortcuts {
  key: string;
  description: string;
  category?: string;
  learned?: boolean;
}
export function activate(context: vscode.ExtensionContext) {
  let shortcuts = context.globalState.get("shortcuts", backup) as Shortcuts[];
  if (!shortcuts.length) {
    shortcuts = backup;
    context.globalState.update("shortcuts", shortcuts);
  }
  shortcuts = shortcuts.filter((shortcut) => !shortcut.learned);
  let shortcut = shortcuts[(Math.random() * shortcuts.length) | 0];

  let disposable = vscode.commands.registerCommand(
    "learn-vs-code.showShortcut",
    async () => {
      const result = await vscode.window.showInformationMessage(
        shortcut.description,
        BUTTON_ENUM.LEARNED
      );
      switch (result) {
        case BUTTON_ENUM.LEARNED:
          const index = shortcuts.indexOf(shortcut);
          shortcuts[index] = { ...shortcut, learned: true };
          context.globalState.update("shortcuts", shortcuts);
          break;
      }
    }
  );
  let clear = vscode.commands.registerCommand(
    "learn-vs-code.clear",
    async () => {
      context.globalState.update("shortcuts", []);
      context.globalState.update("shortcuts", backup);
    }
  );
  let statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    200
  );
  statusBarItem.text = shortcut.key;
  statusBarItem.show();
  statusBarItem.command = "learn-vs-code.showShortcut";

  context.subscriptions.push(disposable);
  context.subscriptions.push(clear);
}

export function deactivate() {}
