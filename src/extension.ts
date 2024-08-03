import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.selectLineWithoutNewline', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const position = editor.selection.active;
            const line = editor.document.lineAt(position.line);
            const newSelection = new vscode.Selection(line.range.start, line.range.end);
            editor.selection = newSelection;
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}