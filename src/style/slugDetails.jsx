import { styled } from 'styled-components';

export const SlugDetails = styled.div`

    max-width: 900px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;


.divider{
    background-color: ${({theme}) => theme.bg_divider}
}

.head{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}


.head input{
    width: 100%;

    outline: none;
    border: 1px solid #58585a;

    padding: 5px 10px;
    padding-right: 37px;
}

.head span{
    position: absolute;
    right: 10px;
    top: 6px;
}

.theme{
    cursor: pointer;
}


.list-todo{
    display: flex;
    flex-direction: column;
    gap: 20px;

    color: ${({theme}) => theme.font};
}

.list{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}


.check-list{
    width: 100%;
    display: flex;

    justify-content: space-between;

    position: relative;

    padding: 15px;
}

.check{
    width: 90%;
    display: flex;
    align-items: center;
    gap: 10px;
}

.check span{
    width: 100%;
    overflow-wrap: break-word;
}

.more{
    font-size: 15px;

    cursor: pointer;
    padding: 3px;
    border-radius: 5px;

   display: flex;
   justify-content: center;
   align-items: center;
}

.more:hover{
    background-color: #d9d9e3;
}


.card-absolut{
    position: absolute;

    width: 80px;
    top: -40px;
    right: 40px;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}



.checks{
    margin: 30px 0px;
}

.checkbox{
    width: 16px;
}

`

export const SlugPass = styled.div`

.card{
    background: ${({theme}) => theme.bg_card};
}

.title{
    font-size: 1rem;
    text-align: center;

    margin-bottom: 30px;

    color: ${({theme}) => theme.font};
}

.passw{
    margin-bottom: 30px;
    position: relative;
}

.passw input{
    width: 100%;

    outline: none;
    border: 1px solid #58585a;

    padding: 5px 10px;
    padding-right: 27px;
}

.icon{
    position: absolute;

    right: 10px;
    top: 7px;

    cursor: pointer;
}

.icon:hover{
    opacity: 0.7;
}


`