enum LogLevel {
    VERBOSE = "VERBOSE",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}

export class Logger {
    public info(subject: string, message: string): void {
        this.log(subject, LogLevel.INFO, message);
    }

    public verbose(subject: string, message: string): void {
        this.log(subject, LogLevel.VERBOSE, message);
    }

    public warn(subject: string, message: string): void {
        this.log(subject, LogLevel.WARN, message);
    }

    public error(subject: string, message: string): void {
        this.log(subject, LogLevel.ERROR, message);
    }

    private log(subject: string, level: LogLevel, message: string): void {
        console.log(`[${level}] ${subject} - ${message}`);
    }
}

const logger = new Logger();
export default logger;