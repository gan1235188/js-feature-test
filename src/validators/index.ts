import { validator as memberExpressionLiterals} from './memberExpressionLiterals.validator'
import { validator as functionBind } from './functionBind.validator'
import { validator as regenerator } from './regenerator.validator'
import { validator as spread } from './spread.validator'
import { validator as destructuring } from './destructuring.validator'
import { validator as optionalCatchBinding } from './optionalCatchBinding.validator'
import { validator as unicodePropertyRegex } from './unicodePropertyRegex.validator'
import { validator as asyncToGenerator } from './asyncToGenerator.validator'
import { validator as arrowFunctions } from './arrowFunctions.validator'
import { validator as blockScopedFunctions } from './blockScopedFunctions.validator'
import { validator as blockScoping } from './blockScoping.validator'
import { validator as classProperties } from './classProperties.validator'
import { validator as classes } from './classes.vallidator'
import { validator as computedProperties } from './computedProperties.validator'
import { validator as dotallRegex } from './dotallRegex.validator'
import { validator as exponentiationOperator } from './exponentiationOperator.validator'
import { validator as forOf } from './forOf.validator'
import { validator as functionName } from './functionName.validator'
import { validator as _instanceof } from './instanceof.validator'
import { validator as literals } from './literals.validator'
import { validator as propertyLiterals } from './propertyLiterals.validator'
import { validator as namedCapturingGroupsRegex } from './namedCapturingGroupsRegex.validator'
import { validator as newTarget } from './newTarget.validator'
import { validator as objectSuper } from './ObjectSuper.validator'
import { validator as parameters } from './parameters.validator'
import { validator as reservedWord } from './reservedWord.validator'
import { validator as stickyRegex } from './stickyRegex.validator'
import { validator as templateLiterals } from './templateLiterals.validator'
import { validator as typeofSymbol } from './typeofSymbol.validator'
import { validator as unicodeRegex } from './unicodeRegex.validator'
import { validator as logicalAssignmentOperators } from './logicalAssignmentOperators.validator'
import { validator as optionalChaining } from './optionalChaining.validator'
import { validator as pipelineOperator } from './pipelineOperator.validator'
import { validator as nullishCoalescingOperator } from './nullishCoalescingOperator.validator'
import { validator as doExpressions } from './doExpressions.validator'
import { validator as functionSent } from './functionSent.validator'
import { validator as numericSeparator } from './numericSeparator.validator'
import { validator as throwExpressions } from './throwExpressions.validator'
import { validator as propertyMutators } from './propertyMutators.validator'
import { validator as asyncGeneratorFunctions } from './asyncGeneratorFunctions.validator'
import { validator as partialApplication } from './partialApplication.validator'
import { validator as privateMethods } from './privateMethods.validator'
import { validator as decorators } from './decorators.validator'

export const validators = [
  memberExpressionLiterals,
  functionBind,
  regenerator,
  spread,
  destructuring,
  optionalCatchBinding,
  unicodePropertyRegex,
  asyncToGenerator,
  arrowFunctions,
  blockScopedFunctions,
  blockScoping,
  classProperties,
  classes,
  computedProperties,
  dotallRegex,
  exponentiationOperator,
  forOf,
  functionName,
  _instanceof,
  literals,
  propertyLiterals,
  namedCapturingGroupsRegex,
  newTarget,
  objectSuper,
  parameters,
  reservedWord,
  stickyRegex,
  templateLiterals,
  typeofSymbol,
  unicodeRegex,
  logicalAssignmentOperators,
  optionalChaining,
  pipelineOperator,
  nullishCoalescingOperator,
  doExpressions,
  functionSent,
  numericSeparator,
  throwExpressions,
  propertyMutators,
  asyncGeneratorFunctions,
  partialApplication,
  privateMethods,
  decorators
]