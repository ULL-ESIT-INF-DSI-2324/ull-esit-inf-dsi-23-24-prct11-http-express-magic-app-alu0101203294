import fs from 'fs';
import { Card } from './interfaces/card.js';
import * as path from 'path';


/**
 * Clase que se encarga de manejar los archivos de las cartas.
 * @class FileManager Clase que se encarga de manejar los archivos de las cartas.
 * @param username Nombre de usuario.
 * @returns Retorna un manejador de archivos.
 * @constructor
 * @function getUserDir Retorna el directorio del usuario.
 * @function getFilePath Retorna la ruta de un archivo.
 * @function load Carga las cartas del usuario.
 * @function save Guarda las cartas del usuario.
 * 
 */
export class FileManager {
  private readonly userDir: string;

  constructor(private username: string) {
    this.userDir = `./src/Magic/users/${username}`;
  }

  /**
   * Método que retorna el directorio del usuario.
   * @returns Retorna el directorio del usuario.
   */
  public getUserDir(): string {
    return this.userDir;
  }

  /**
   * Método que retorna la ruta de un archivo.
   * @param cardId Identificador de la carta.
   * @returns Retorna la ruta de un archivo.
   */
  public getFilePath(cardId: number): string {
    return path.join(this.userDir, `card_${cardId}.json`);
  }

  /**
   * Método que carga las cartas del usuario.
   * @param username Nombre de usuario.
   * @returns Retorna un mapa con las cartas del usuario.
   */
  public load(): Map<number, Card> {
    const collection = new Map<number, Card>();
    if (fs.existsSync(this.userDir)) {
      const files = fs.readdirSync(this.userDir);
      for (const file of files) {
        const data = fs.readFileSync(path.resolve(this.userDir, file), 'utf-8');
        const card = JSON.parse(data) as Card;
        collection.set(card.id, card);
      }
    }
    return collection;
  }

  /**
   * Método que guarda las cartas del usuario.
   * @param collection 
   * @returns Retorna un mapa con las cartas del usuario.
   */
  public saveAsync(collection: Map<number, Card>): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        this.createDirectoryIfNotExists();
        for (const [cardId, card] of collection) {
            const filePath = this.getFilePath(cardId);
            fs.writeFile(filePath, JSON.stringify(card, null, 2), (error) => {
                if (error) {
                    reject(error);
                }
            });
        }
        resolve();
    });
}

  /**
   * Método que crea un directorio si no existe.
   * @returns Retorna un directorio si no existe.
   * @private
   */
  private createDirectoryIfNotExists(): void {
    if (!fs.existsSync(this.userDir)) {
      fs.mkdirSync(this.userDir, { recursive: true });
    }
  }
}
