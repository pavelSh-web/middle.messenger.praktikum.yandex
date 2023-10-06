export const template = `
  

    <div class="chats-list">
        <div class="chats-list-header">
            <div class="chats-list-header__actions">
                <button class="chats-list__profile-button msg-button style-text is-light-dark opacity">Профиль</button>
            </div>
            
            <input class="chats-list-header__input msg-input" type="text" placeholder="Поиск" />
        </div>
        
        <div class="chats-list__dialogs scroll-container">
            {{#each list}}
                <div class="chat-item {{ this.className }}">
                    <div class="chat-item__avatar"></div>
                    <div class="chat-item__content">
                        <div class="chat-item__header">
                            <div class="chat-item__name">{{ this.name }}</div>
                            <div class="chat-item__time">{{ this.time }}</div>
                        </div>
    
                        <div class="chat-item__body">
                            <div class="chat-item__text">{{ this.message }}</div>

                            {{#if this.unread}}
                                <div class="chat-item__indicator">{{ this.unread }}</div>
                            {{/if}}
                        </div>
                    </div>
                </div>
            {{/each}}
        </div>
    </div>
`;
