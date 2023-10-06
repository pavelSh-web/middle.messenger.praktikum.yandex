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
                        <img src="/static/images/icons/readed-arrows.svg" alt="+">
                        <span>13:35</span>
                    </div>
                </div>
                <div class="chat-view-dialog__message chat-view-dialog__message_sent">
                    <div class="chat-view-dialog__message-content">
                        Современные технологии достигли такого уровня, что высококачественный прототип будущего проекта говорит о возможностях инновационных методов управления процессами.
                    </div>
                    <div class="chat-view-dialog__message-info">
                        <img src="/static/images/icons/unread-arrows.svg" alt="+">
                        <span>13:37</span>
                    </div>
                </div>
                <div class="chat-view-dialog__message chat-view-dialog__message_sent">
                    <img class="chat-view-dialog__message-image" src="/static/images/content/test-img.jpeg" alt="image">
                    <div class="chat-view-dialog__message-content">
                        Вот такие горы вчера сфорткал!)
                    </div>
                    <div class="chat-view-dialog__message-info">
                        <img src="/static/images/icons/unread-arrows.svg" alt="+">
                        <span>13:37</span>
                    </div>
                </div>

                <div class="chat-view-dialog__message chat-view-dialog__message_sent">
                    <img class="chat-view-dialog__message-image" src="/static/images/content/test-img2.jpeg" alt="image">
                    <div class="chat-view-dialog__message-info">
                        <img src="/static/images/icons/unread-arrows.svg" alt="+">
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
            <input class="msg-input rounded" />
            <button class="msg-button is-primary opacity collapse">
                <img src="/static/images/icons/send-arrow.svg" alt="->">
            </button>
        </div>
    </div>
`;