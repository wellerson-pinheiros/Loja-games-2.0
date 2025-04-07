// pedido.entity.ts
export class Pedido {
    numero: string;
  
    gerarNumeroPedido() {
      const data = new Date();
      const ano = data.getFullYear();
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const dia = String(data.getDate()).padStart(2, '0');
    
      const dataStr = `${ano}${mes}${dia}`;
    
      const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let codigoAleatorio = '';
      for (let i = 0; i < 6; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        codigoAleatorio += caracteres[indice];
      }
    
      this.numero = `PED-${dataStr}-${codigoAleatorio}`;
    }
  }
  