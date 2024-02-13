Feature: Devsu E2E

        Scenario: Escenario 1
            Given Dirigirse a demoblaze website
             When Seleccionar producto Samsung galaxy s7
              And Añadir producto al carro
              And Volver al home
              And Seleccionar producto Sony xperia z5
              And Añadir producto al carro
              And Visualizar carrito
              And Crear orden de compra
              And Completar formulario con JSON dataOrder
              And Comprar orden
             Then Compra exitosa
  