export interface TerminalQuickFixProvider {
  /**
   * Provides terminal quick fixes
   * @param commandMatchResult The command match result for which to provide quick fixes
   * @param token A cancellation token indicating the result is no longer needed
   * @return Terminal quick fix(es) if any
   */
  provideTerminalQuickFixes(commandMatchResult: TerminalCommandMatchResult, token: CancellationToken): ProviderResult<SingleOrMany<TerminalQuickFixExecuteTerminalCommand | TerminalQuickFixOpener | Command>>;
}
export class TerminalQuickFixExecuteTerminalCommand {
  /**
   * The terminal command to run
   */
  terminalCommand: string;
  constructor(terminalCommand: string);
}

export interface TerminalExecutedCommand {
  /**
   * The {@link Terminal} the command was executed in.
   */
  terminal: Terminal;
  /**
   * The full command line that was executed, including both the command and the arguments.
   */
  commandLine: string | undefined;
  /**
   * The current working directory that was reported by the shell. This will be a {@link Uri}
   * if the string reported by the shell can reliably be mapped to the connected machine.
   */
  cwd: Uri | string | undefined;
  /**
   * The exit code reported by the shell.
   */
  exitCode: number | undefined;
  /**
   * The output of the command when it has finished executing. This is the plain text shown in
   * the terminal buffer and does not include raw escape sequences. Depending on the shell
   * setup, this may include the command line as part of the output.
   */
  output: string | undefined;
}

export namespace window {
  /**
   * An event that is emitted when a terminal with shell integration activated has completed
   * executing a command.
   *
   * Note that this event will not fire if the executed command exits the shell, listen to
   * {@link onDidCloseTerminal} to handle that case.
   */
  export const onDidExecuteTerminalCommand: Event<TerminalExecutedCommand>;
}
