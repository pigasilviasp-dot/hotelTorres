#  Hotel Torres - React Booking App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

Sito web interattivo per un hotel, progettato per gestire l'intera presenza online della struttura. Integra una vetrina per le stanze e i pacchetti vacanza, unita a un motore di prenotazione dinamico con calcolo dei prezzi e simulazione di pagamento.

---

## Caratteristiche Principali

- **Gestione Dinamica delle Prenotazioni:** Selezione delle date di Check-in e Check-out con calcolo automatico dei giorni tramite `react-datepicker` e `date-fns`.
- **Carrello Persistente:** Utilizzo della `Context API` e del `localStorage` per mantenere i dati del carrello anche dopo il ricaricamento della pagina.
- **Calcolo Dinamico dei Prezzi:** Il totale si aggiorna in tempo reale in base alla quantità di stanze selezionate e al numero di notti.
- **Integrazione Backend:** Recupero dinamico delle stanze e delle offerte da un database relazionale tramite **Supabase**.
- **Checkout e Pagamenti:** Integrazione con **Stripe Payment Links** (in modalità Test) per simulare un flusso di pagamento sicuro e professionale.
- **Design Responsivo e UI Moderna:** Interfaccia utente costruita interamente con **Tailwind CSS**, utilizzando una palette di colori customizzata (CSS Variables) per garantire massima coerenza visiva.

---

## Tecnologie Utilizzate

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS (con variabili personalizzate)
* **Routing:** React Router DOM (v6)
* **State Management:** React Context API + Hooks (`useState`, `useEffect`)
* **Database / BaaS:** Supabase
* **Gestione Date:** React Datepicker, Date-fns
* **Pagamenti:** Stripe

---
