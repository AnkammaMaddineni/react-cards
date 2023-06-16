import React from "react";


function Card (props){
    const editHandler = (event, id) => {
        props.editCard(id);
    }
    const clearHandler = (event, id) => {
        props.deleteCard(id);
    }

    const getCardlist = () => {
        let cardList = props.cards.map((card, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card" style={{width:'18rem', marginBottom:'20px'}}>
                    <div className="card-body">
                        <h5 className="card-title">{card.Name}</h5>
                        <p className="card-text">{card.Description}</p>
                        <a href="#" className="card-link">{card.Email}</a>
                        <br/>
                        <br/>
                        <button className="btn btn-primary mr-2" onClick={(event) => editHandler(event, card.id)}>Update</button>
                        <button className="btn btn-danger" onClick={(event) => clearHandler(event, card.id)}>Delete</button>
                    </div>
                    </div>
                </div>
            );
        })
        return cardList.length > 0 ? cardList : null;
    }

    
    
        return(
        <>
        <div className="row">
            {getCardlist()}
        </div>
        </>
    )
}
export default Card;