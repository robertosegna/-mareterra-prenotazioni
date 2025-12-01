# Workflow n8n per rispondere alle richieste WhatsApp

Questo workflow usa un webhook n8n per ricevere i messaggi in arrivo da WhatsApp Cloud API e rispondere automaticamente con un messaggio di cortesia.

## Come importarlo
1. In n8n scegli **Import from File** e carica `n8n-whatsapp-workflow.json`.
2. Apri il nodo **Webhook** e copia l'URL (include un path `whatsapp/inbound`). Configuralo come webhook nella tua app WhatsApp Cloud.
3. Imposta le variabili d'ambiente nel tuo deployment n8n:
   - `WHATSAPP_TOKEN`: token dell'app WhatsApp Cloud con permesso `messages`.
   - `WHATSAPP_PHONE_ID`: ID del numero di telefono (es. `1234567890`).
4. Pubblica il webhook su HTTPS (n8n Cloud oppure dietro un reverse proxy) e ripeti il test da Meta per validarlo.

## Flusso dei nodi
- **Webhook**: riceve il payload `POST` di WhatsApp Cloud. Restituisce subito `200 OK` per evitare timeout.
- **Parse Message (Function)**: estrae numero e testo dal payload (`entry[0].changes[0].value.messages[0]`).
- **Send Reply (HTTP Request)**: chiama `https://graph.facebook.com/v18.0/<WHATSAPP_PHONE_ID>/messages` con bearer `WHATSAPP_TOKEN` per inviare una risposta testuale.
- **Respond to Webhook**: chiude la richiesta restituendo l'output del nodo precedente.

## Personalizzare la risposta
Nel nodo **Send Reply**, modifica il campo `text.body` per cambiare il messaggio. Puoi anche usare condizioni o switch per routing diverso in base al contenuto del messaggio.
