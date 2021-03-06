import { Container, Header, HeaderRow, HeaderItem, HistoryContainer, BodyRow, BodyItem } from 'components/TransactionHistory/TransactionHistory.styled';
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
  return (
    <Container>
        <Header>
            <HeaderRow>
                <HeaderItem>Type</HeaderItem>
                <HeaderItem>Amount</HeaderItem>
                <HeaderItem>Currency</HeaderItem>
            </HeaderRow>
        </Header>
        <HistoryContainer>
        {items.map(item => {
            const {id, type, amount, currency} = item;
            return <BodyRow key={id}>
                        <BodyItem>{type}</BodyItem>
                        <BodyItem>{amount}</BodyItem>
                        <BodyItem>{currency}</BodyItem>
                    </BodyRow>})
        }
        </HistoryContainer>
    </Container>
  )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}