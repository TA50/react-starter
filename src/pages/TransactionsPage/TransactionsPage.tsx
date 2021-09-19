import * as React from 'react';
import { AppError, Transaction, TransactionApi } from '../../core';
import Loader from '../../components/Loader/Loader';
import GenericTable from '../../components/GenericTable/GenericTable';
import { transactionHeadCells } from './transactionHeadCells';
import { container, ServiceName } from '../../core';
import { TableRow, TableCell } from '@material-ui/core';
import ILogger from '../../core/services/Logger/ILogger';

interface ITransactionsPageProps {
}

const TransactionsPage: React.FunctionComponent<ITransactionsPageProps> = (props) => {
    const [transactions, setTransaction] = React.useState<Transaction[] | null>(null);
    const searchFunction = (item: Transaction, text: string) => {
        const str = item.classic_coffee_count + item.user_id + "";
        return str.toLowerCase().includes(text.toLowerCase());
    }
    const tranactionApi = container.get<TransactionApi>(ServiceName.TransactionApi);
    const logger = container.get<ILogger>(ServiceName.Logger);
    React.useEffect(() => {
        tranactionApi.getMany().then(result => {
            setTransaction([...result])
        }).catch((err: AppError) => {
            logger.showError(err);
        })
    }, [])
    const createRow = (item: Transaction) => {
        return <TableRow>
            {transactionHeadCells.map((head, i) => {
                return <TableCell
                    key={i}
                    align="center"
                    size="small"
                >
                    {head.select(item)}
                </TableCell>
            })}
        </TableRow>
    }
    return <Loader isLoading={transactions == null}>
        <GenericTable<Transaction>
            headCells={transactionHeadCells}
            searchFunction={searchFunction}
            data={transactions ? transactions : []}
            rowTemplate={createRow}
        />
    </Loader>
};

export default TransactionsPage;
