import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.css'],
  standalone: true,
})
export class TypingEffectComponent implements OnInit {
  lines: string[] = [
    'Transforming Ideas into Scalable Web Solutions',
    'Expert Web Consulting & Architecture for Your Digital Success',
    'Building Robust Web Systems with Innovative Architecture',
    'Your Partner in Crafting Cutting-Edge Web Experiences',
    'Architecting the Future of Web Technology Today',
  ];

  currentLineIndex: number = 0;
  displayText: string = '';
  typingSpeed: number = 100; // milliseconds per character
  pauseBetweenLines: number = 2000; // milliseconds to pause between lines
  private isDeleting: boolean = false;
  private loop: any;

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    const fullText = this.lines[this.currentLineIndex];
    const fullTextLength = fullText.length;

    if (!this.isDeleting) {
      // Typing
      this.displayText = fullText.substring(0, this.displayText.length + 1);

      if (this.displayText.length === fullTextLength) {
        // Line fully typed
        this.isDeleting = true;
        setTimeout(() => this.startTyping(), this.pauseBetweenLines);
      } else {
        setTimeout(() => this.startTyping(), this.typingSpeed);
      }
    } else {
      // Deleting
      this.displayText = fullText.substring(0, this.displayText.length - 1);

      if (this.displayText.length === 0) {
        // Line fully deleted, move to next line
        this.isDeleting = false;
        this.currentLineIndex = (this.currentLineIndex + 1) % this.lines.length;
        setTimeout(() => this.startTyping(), 500); // Short pause before typing next line
      } else {
        setTimeout(() => this.startTyping(), this.typingSpeed / 2);
      }
    }
  }
}
