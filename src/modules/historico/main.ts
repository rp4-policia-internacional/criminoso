import { RecordCrimeCommand, InvestigateCrimeCommand, ConcludeCrimeCommand } from './commands/CrimeCommands';
import Crime from './receivers/Crime';
import CrimeHistory from './receivers/CrimeHistory';
import CrimeCommandInvoker from './invoker/CrimeCommandInvoker';
// Criando instâncias
const crime = new Crime('Assalto a Banco', 'Roubo', 'Em andamento');
const crimeHistory = new CrimeHistory();
const commandInvoker = new CrimeCommandInvoker();

// Configurando e executando comandos
const recordCommand = new RecordCrimeCommand(crime);
const investigateCommand = new InvestigateCrimeCommand(crime);
const concludeCommand = new ConcludeCrimeCommand(crime);

crimeHistory.addCommand(recordCommand);
crimeHistory.addCommand(investigateCommand);
crimeHistory.addCommand(concludeCommand);

crimeHistory.showHistory(); // Saída: Registro, Investigação, Conclusão do crime.

// Invocando comandos separadamente
commandInvoker.setCommand(recordCommand);
commandInvoker.executeCommand(); // Saída: Registro do crime: Assalto a Banco, Tipo: Roubo, Status: Em andamento

commandInvoker.setCommand(investigateCommand);
commandInvoker.executeCommand(); // Saída: Investigando o crime: Assalto a Banco
