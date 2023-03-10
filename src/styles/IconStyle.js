import styled from "styled-components";
import {StyledIconBase} from "@styled-icons/styled-icon";

export const IconStyle = styled.div`
    ${StyledIconBase} {
        height: 40px;
        width: auto;
    }
`;

export const ToggleIcon = styled.div`
    ${StyledIconBase} {
        height: 20px;
        width: auto;
        color: ${props => props.theme.color};
    }
`;