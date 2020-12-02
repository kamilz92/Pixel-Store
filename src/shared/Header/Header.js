import { Link } from 'react-router-dom';
import IconBasket from '../../assets/icon.png';
import { Header as HeaderWrapper, Wrapper, Logo, Paragraph, IconWrapper, ItemNumber, Icon as IconImg } from './HeaderElements';
const Header = ({ itemCount }) => {
    const handleBasketClick = (e) => {
        if (itemCount === 0) {
            e.preventDefault();
        } else {
            return;
        }
    }
    return (
        <>
            <HeaderWrapper>
                <Wrapper>
                    <Link to="/">
                        <Logo>Pixel Store</Logo>
                        <Paragraph>Everything you need for deadly adventure</Paragraph>
                    </Link>
                    <Link to="/checkout" onClick={handleBasketClick}>
                        <IconWrapper>
                            <IconImg src={IconBasket} alt="basket" />
                            {itemCount > 0 && <ItemNumber>{itemCount}</ItemNumber>}
                        </IconWrapper>
                    </Link>
                </Wrapper>
            </HeaderWrapper>
        </>
    );
}

export default Header;