import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {EmployeeDetail} from '../../entity/employee-detail';

@Component({
  selector: 'app-employee-knowledge',
  templateUrl: './employee-knowledge.component.html',
  styleUrls: ['./employee-knowledge.component.scss']
})
export class EmployeeKnowledgeComponent implements OnInit {
  @Input() employee: EmployeeDetail;
  jsonLD: SafeHtml;

  public jsonLdObject: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.jsonLdObject = {
      '@context': 'http://www.schema.org',
      '@type': 'Person',
      '@id': 'http://yes-go.yes-soft.de',
      name: this.employee.fullName,
      nationality: 'Syrian',
      birthPlace: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Syria'
        }
      },
      brand: {
        '@type': 'Organization',
        email: 'mailto:info@yes-soft.de',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Deutschland',
          addressRegion: 'Berlin',
          postalCode: '10827',
        }
      },
      Description: this.employee.details,
      jobTitle: this.employee.position,
      image: this.employee.image,
      email: this.employee.gmail,
      knowsLanguage: {
        '@type': 'Language',
        name: this.employee.language,
      },
      sameAs: [
        this.employee.facebook,
        this.employee.linkedin,
        this.employee.twitter,
        this.employee.linkedin,
      ]
    };

    this.jsonLD = this.getSafeHTML(this.jsonLdObject);
  }

  getSafeHTML(value: {}) {
    // If value convert to JSON and escape / to prevent script tag in JSON
    const json = value
      ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
      : '';
    const html = `${json}`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
