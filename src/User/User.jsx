import React from "react";
import Form from './Form';
import Card from './Card';
import { useState } from "react";

function User(){
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Description, setDescription] = useState('');
    const [cards, setCards] = useState([]);
    const [id, setid] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    const nameChange = (value) => {
        setName(value);
    }
    const emailChange = (value) => {
        setEmail(value);
    }
    const descriptionChange = (value) => {
        setDescription(value);
    }
    const clearState = () => {
        setName('');
        setEmail('');
        setDescription('');
    }
    const saveCard = () => {
        const totalCards = cards.length;
        const values = {
            id: totalCards + 1,
            Name: Name,
            Email: Email,
            Description: Description
        }
        const updatedCards = [...cards];
        updatedCards.push(values);
        setCards(updatedCards);
        clearState();
    }
    const editCard = (id) => {
        const cardObj = cards.find((card) => {
            return card.id === id
        })
        setShowEdit(true);
        setName(cardObj.Name);
        setEmail(cardObj.Email);
        setDescription(cardObj.Description);
        setid(cardObj.id);
    }
    const updateCard = () => {
        const updateCard = cards.map((card) => {
            if (card.id === id){
                card.Name = Name;
                card.Email = Email;
                card.Description = Description;
            }
            return card;
        })
        setCards(updateCard);
        clearState('');
        setid('');
        setShowEdit(false);
    }
    const deleteCard = (id) => {
        let updatedCards = cards.filter((card) => {
            return card.id !== id;
        })
        setCards(updatedCards);
    }
    
    return(
        <>
        <Form
        Name = {Name}
        Email = {Email}
        Description = {Description}
        nameChange = {nameChange}
        emailChange = {emailChange}
        descriptionChange = {descriptionChange}
        saveCard = {saveCard}
        showEdit = {showEdit}
        updateCard = {updateCard}
        />
        <br/>
        <br/>
        <Card cards = {cards}
        editCard = {editCard}
        deleteCard = {deleteCard}
        />
        </>
    )
}
export default User;