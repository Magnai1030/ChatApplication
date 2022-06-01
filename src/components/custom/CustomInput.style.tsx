import styled from '@emotion/native';
import Variables from '@constants/Variables';
import { FontFamily } from '@constants/Types';
import Colors from '@constants/Colors';

export const Container = styled.TextInput`
    flex:  ${1},
    paddingLeft: ${18},
    paddingRight: ${18},
    fontFamily: ${FontFamily.REGULAR},
    borderRadius: ${Variables.regularBorderRadius},
    height:  ${44},
    color: ${Colors.secondaryColor},
    fontSize: ${Variables.regularTextSize},
`;
