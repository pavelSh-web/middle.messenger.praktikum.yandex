export const template = `
    <div class="chat-view">
        <div class="chat-view-header">
            <div class="chat-view-header__avatar"></div>
            <div class="chat-view-header__name">Артур</div>
            <div class="chat-view-header__more">
                <button class="msg-button style-text opacity">
                    <img src="/static/images/icons/more.svg" alt="...">
                </button>
            </div>
        </div>
        <div class="chat-view__divider"></div>
        <div class="chat-view-dialog scroll-container">
            <div class="chat-view-dialog__inner">
                <div class="chat-view-dialog__date">Вчера</div>
                <div class="chat-view-dialog__message chat-view-dialog__message_incoming">
                    <div class="chat-view-dialog__message-content">
                        А ещё предприниматели в сети интернет разоблачены.
                    </div>
                    <div class="chat-view-dialog__message-info">
                        <span>12:30</span>
                    </div>
                </div>
                <div class="chat-view-dialog__date">Сегодня</div>
                <div class="chat-view-dialog__message chat-view-dialog__message_sent">
                    <div class="chat-view-dialog__message-content">
                        А также стремящиеся вытеснить традиционное производство, нанотехнологии являются только методом политического участия и функционально разнесены на независимые элементы! Ясность нашей позиции очевидна: консультация с широким активом требует от нас анализа анализа существующих паттернов поведения! 
                    </div>
                    <div class="chat-view-dialog__message-info">
                        <img src="/static/images/icons/readed-arrows.svg" alt="readed">
                        <span>13:35</span>
                    </div>
                </div>
                <div class="chat-view-dialog__message chat-view-dialog__message_sent">
                    <div class="chat-view-dialog__message-content">
                        Современные технологии достигли такого уровня, что высококачественный прототип будущего проекта говорит о возможностях инновационных методов управления процессами.
                    </div>
                    <div class="chat-view-dialog__message-info">
                        <img src="/static/images/icons/unread-arrows.svg" alt="unreaded">
                        <span>13:37</span>
                    </div>
                </div>
                <div class="chat-view-dialog__message chat-view-dialog__message_sent">
                    <img class="chat-view-dialog__message-image" src="https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" alt="image">
                    <div class="chat-view-dialog__message-content">
                        Вот такие горы вчера сфорткал!)
                    </div>
                    <div class="chat-view-dialog__message-info">
                        <img src="/static/images/icons/unread-arrows.svg" alt="unreaded">
                        <span>13:37</span>
                    </div>
                </div>

                <div class="chat-view-dialog__message chat-view-dialog__message_sent">
                    <img class="chat-view-dialog__message-image" src="https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" alt="image">
                    <div class="chat-view-dialog__message-info">
                        <img src="/static/images/icons/unread-arrows.svg" alt="unreaded">
                        <span>13:37</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-view__divider"></div>
        <div class="chat-view-input">
            <button class="msg-button style-text opacity collapse">
                <img src="/static/images/icons/attach.svg" alt="+">
            </button>
            <form>
                <input class="msg-input rounded" name="message" />
                <button class="msg-button is-primary opacity collapse" type="submit">
                    <img src="/static/images/icons/send-arrow.svg" alt="->">
                </button>
            </form>
        </div>
    </div>
`;
