import { styled } from 'styled-components';

export const PopupList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 28px;
    background-color: #313131;
    color: #fff;
    max-height: 305px;
    width: 248px;
    box-sizing: border-box;
    padding: 34px;
    border: 1px solid #FFF;
    border-radius: 12px;
    position: absolute;
    top: 35px;
    left: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
        background-color: #f9f9fd;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: linear-gradient(315deg, rgb(22, 123, 217), rgb(89, 20, 146));
    }
`

export const PopupListItem = styled.li`
    transition: all 0.3s;
    &:hover {
        color: #B672FF;
        cursor: pointer;        
        text-decoration: underline;
    }
`

// .popup-list::-webkit-scrollbar {
//     width: 8px;
// }
// .popup-list::-webkit-scrollbar-track {
//     -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
//     background-color: #f9f9fd;
//     border-radius: 10px;
// }

//   .popup-list::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background: linear-gradient(315deg, rgb(22, 123, 217), rgb(89, 20, 146));
// }



// .popup-list:hover {
//     border: 1px solid #9A48F1;
// }



// .popup-list__item:hover {
//     color: #b672ff;
//     cursor: pointer;
//     text-decoration: underline;
// }