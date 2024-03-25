import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-feedback-and-chat',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './feedback-and-chat.component.html',
    styleUrl: './feedback-and-chat.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedbackAndChatComponent implements OnInit {
    private formBuilder = inject(FormBuilder);

    contactForm = this.formBuilder.group({
        fullname: '',
        email: '',
        comments: ''
    });

    showMsg: boolean = false;

    ngOnInit() {
        // Load the chat script, which activates the `<df-messenger>` element.
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1';
        document.head.appendChild(script);
    }

    onSubmit(): void {
        console.log('Your feedback has been submitted', this.contactForm.value);
        this.showMsg = true;
        this.contactForm.reset();
    }
}
