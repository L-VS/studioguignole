            '1px solid #ccc';
            optionsMenu.style.padding = '10px';
            optionsMenu.style.zIndex = '1000';

            const deleteOption = document.createElement('button');
            deleteOption.textContent = 'Delete';
            deleteOption.onclick = () => {
                listItem.remove();
                optionsMenu.remove();
            };

            optionsMenu.appendChild(deleteOption);
            document.body.appendChild(optionsMenu);

            // Supprimer le menu si on clique ailleurs
            document.addEventListener('click', () => optionsMenu.remove(), { once: true });
        }
