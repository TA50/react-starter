import * as React from 'react';
import { Container, TableCell, TableRow } from '@material-ui/core';
import Loader from '../../components/Loader/Loader';
import { AppError, container, ServiceName, Shop, ShopApi } from '../../core';
import ILogger from '../../core/services/Logger/ILogger';
import { shopsHeadCells } from './shopsHeadCells';
import { render } from 'react-dom';
import GenericTable from '../../components/GenericTable/GenericTable';

export interface IShopsPageProps {
}

export interface IShopsPageState {
    loading: boolean;
    shops: Shop[];
}

export default class ShopsPage extends React.Component<IShopsPageProps, IShopsPageState> {
    private _shopsApi: ShopApi;
    private _logger: ILogger;
    constructor(props: IShopsPageProps) {
        super(props);

        this.state = {
            loading: true,
            shops: []
        }
        this._shopsApi = container.get<ShopApi>(ServiceName.ShopApi);
        this._logger = container.get<ILogger>(ServiceName.Logger);
    }

    componentDidMount() {
        this._shopsApi.getMany()
            .then(result => {
                this.setState({
                    loading: false,
                    shops: [...result]
                })
            })
            .catch((err: AppError) => {
                this._logger.showError(err)
                this.setState({
                    loading: false,
                    shops: []
                })
            })
    }
    createRow = (shop: Shop) => {
        return <TableRow>
            {shopsHeadCells.map((head, i) => {
                return <TableCell
                    key={i}
                    align="center"
                    size="small"
                >
                    {head.select(shop)}
                </TableCell>
            })}
        </TableRow>
    }
    searchFunction = (shop: Shop, text: string) => {
        const str = shop.emirate + shop.email + shop.name;
        return str.toLowerCase().includes(text.toLowerCase());
    }
    public render() {
        return (
            <Loader isLoading={this.state.loading} >

                <Container>
                    <GenericTable<Shop>
                        headCells={shopsHeadCells}
                        searchFunction={this.searchFunction}
                        rowTemplate={this.createRow}
                        data={this.state.shops}
                    />
                </Container>
            </Loader>
        );
    }
}
