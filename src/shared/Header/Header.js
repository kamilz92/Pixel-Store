import Icon from '../../assets/icon.png';
import { Header as HeaderWrapper, Wrapper, Logo, Paragraph, IconWrapper, ItemNumber, Icon as IconImg } from './HeaderElements';
const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <Wrapper>
                    <div>
                        <Logo>Pixel Store</Logo>
                        <Paragraph>Everything you need for deadly adventure</Paragraph>
                    </div>
                    <IconWrapper>
                        <IconImg src={Icon} alt="basket" />
                        <ItemNumber>1</ItemNumber>
                    </IconWrapper>
                </Wrapper>
            </HeaderWrapper>
        </>
    );
}

export default Header;