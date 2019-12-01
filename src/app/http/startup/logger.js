const { createLogger, format, transports} = require('winston');
const { combine, timestamp, label, printf, colorize, prettyPrint } = format;

const logger = createLogger({
  level: 'silly',
  format: format.json(),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testingasd') {
  const myFormat = printf(({ level, message, scope, subscope, timestamp }) => {
    return `${timestamp} [${scope} > ${subscope}] ${level}: ${message}`;
  });

  logger.add(new transports.Console({
    format: combine(colorize(), timestamp(), myFormat)
  }));
}