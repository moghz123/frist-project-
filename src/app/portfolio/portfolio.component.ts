import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isImg:boolean=true
getImg=()=>{
this.isImg=!this.isImg
 document.querySelector('#layer')?.classList.remove('d-none')
}
close:boolean=true
closeImg=(x:any)=>{
  if (x.target===document.querySelector('#layer')) {
    document.querySelector('#layer')?.classList.add('d-none')
  }
}
getSrc=()=>{
const imgSrc=document.querySelectorAll('.thePlus');
for (let i = 0; i < imgSrc.length; i++) {
 imgSrc[i].addEventListener('click',()=>{
 const src= imgSrc[i].previousElementSibling?.getAttribute('src');
 document.querySelector('#the-img')?.setAttribute('src',`${src}`)
 })}}

}
