import 'mocha';
import {expect} from 'chai';
import { Color } from "../src/Magic/Enums/color.js";
import { LineType } from "../src/Magic/Enums/linetype.js";
import { Rarity } from "../src/Magic/Enums/rarity.js";
import { Card } from "../src/Magic/interfaces/card.js";
import { CardCollection } from "../src/Magic/cardmanager.js";


describe('CardCollection', () => {
    const collection = new CardCollection('testUser');

    describe('addCard()', () => {
        it('should add a new card to the collection', () => {
            const newCard: Card = {
                id: 1,
                name: 'Test Card',
                manaCost: 3,
                color: Color.Azul,
                cardType: LineType.Criatura,
                rarity: Rarity.Comun,
                rulesText: 'This is a test card.',
                marketPrice: 10
            };

            const promise = collection.addCard(newCard);

            // comprobar que la promesa se haya resuelto correctamente
            return promise.then(() => {
                // obtenemos la colección después de agregar la carta
                const updatedCollection = collection.listCards();

                // comprobar que la colección contenga la nueva carta
                const addedCard = updatedCollection.find(card => card.id === 1);
                expect(addedCard).to.deep.equal(newCard);
            });
        });

        it('should not add a card with duplicate ID to the collection', () => {
            // Intentamos añadir una carta duplicada
            const duplicateCard: Card = {
                id: 1,
                name: 'Duplicate Card',
                manaCost: 4,
                color: Color.Rojo,
                cardType: LineType.Conjuro,
                rarity: Rarity.Rara,
                rulesText: 'This is a duplicate card.',
                marketPrice: 20
            };

            const promise = collection.addCard(duplicateCard);

            // comprobamos que la promesa se haya resuelto correctamente
            return promise.then(() => {
                // obtenemos la colección después de intentar agregar la carta duplicada
                const updatedCollection = collection.listCards();

                // comprobamos que la colección no haya cambiado
                const addedCard = updatedCollection.filter(card => card.id === 1);
                expect(addedCard.length).to.equal(1);
            });
        });
    });

    describe('updateCard()', () => {
        it('should update an existing card in the collection', () => {
            const updatedCard: Card = {
                id: 1,
                name: 'Updated Card',
                manaCost: 5,
                color: Color.Verde,
                cardType: LineType.Encantamiento,
                rarity: Rarity.Infrecuente,
                rulesText: 'This card has been updated.',
                marketPrice: 15
            };

            const promise = collection.updateCard(updatedCard);

            // comprobamos que la promesa se haya resuelto correctamente
            return promise.then(result => {
                // comprobamos que la función haya devuelto true (éxito)
                expect(result).to.be.true;

                // obtenemos la colección después de actualizar la carta
                const updatedCollection = collection.listCards();

                // comprobamos que la carta haya sido actualizada correctamente
                const updated = updatedCollection.find(card => card.id === 1);
                expect(updated).to.deep.equal(updatedCard);
            });
        });

        it('should return false if the card to be updated does not exist', () => {
            const nonExistentCard: Card = {
                id: 100,
                name: 'Nonexistent Card',
                manaCost: 2,
                color: Color.Azul,
                cardType: LineType.Artefacto,
                rarity: Rarity.Rara,
                rulesText: 'This card does not exist.',
                marketPrice: 25
            };

            const promise = collection.updateCard(nonExistentCard);

            // comprobamos que la promesa se haya resuelto correctamente
            return promise.then(result => {
                // comprobamos que la función haya devuelto false (al fallar)
                expect(result).to.be.false;
            });
        });
    });
});