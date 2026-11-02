import React from 'react';
import { X, Ruler, HelpCircle, Phone, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { SIZE_CHART, BRAND_INFO } from '../data/products';

export const SizeGuideModal = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSizeGuideOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-0">
        <div className="inline-block w-full max-w-2xl my-8 p-6 sm:p-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl border border-gold/30 relative z-50">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-beige">
            <div className="flex items-center gap-2.5">
              <Ruler className="w-5 h-5 text-gold-dark" />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-brown">
                  Toorva Size & Fit Guide
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-brown-muted font-medium">
                  Standard European & Indian Sizing
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(false)}
              className="p-1.5 text-brown/60 hover:text-brown bg-beige/30 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Size Chart Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-ivory border-b border-beige text-brown font-semibold uppercase tracking-wider text-[10px]">
                  <th className="py-2.5 px-3">EU Size</th>
                  <th className="py-2.5 px-3">US Size</th>
                  <th className="py-2.5 px-3">UK / India</th>
                  <th className="py-2.5 px-3">Foot Length (cm)</th>
                  <th className="py-2.5 px-3">Foot Length (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-beige/60">
                {SIZE_CHART.map((row) => (
                  <tr key={row.eu} className="hover:bg-ivory/50 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-brown">{row.eu}</td>
                    <td className="py-2.5 px-3 text-brown-muted">{row.us}</td>
                    <td className="py-2.5 px-3 text-brown-muted">{row.uk}</td>
                    <td className="py-2.5 px-3 font-medium text-gold-dark">{row.footCm}</td>
                    <td className="py-2.5 px-3 text-brown-muted">{row.inInches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Measure & Fit Advice */}
          <div className="mt-6 p-4 rounded-xl bg-ivory border border-gold/30 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-brown flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-gold-dark" />
              <span>How To Measure Your Foot Length</span>
            </h4>
            <ol className="text-xs text-brown-muted space-y-1.5 list-decimal pl-4 leading-relaxed">
              <li>Place a plain piece of paper on the floor against a straight wall.</li>
              <li>Step onto the paper with your heel lightly touching the wall.</li>
              <li>Mark the tip of your longest toe with a pencil held vertically.</li>
              <li>Measure the distance from the edge of the paper to the mark in centimeters.</li>
              <li>Compare with the chart above. If you have broad feet or fall between sizes, size up by 1.</li>
            </ol>
          </div>

          {/* Zero Bite Guarantee Note */}
          <div className="mt-4 p-3.5 rounded-lg bg-beige/40 flex items-start gap-2.5 text-xs text-brown">
            <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Natural Leather Adaptation:</strong> Because Toorva Juttis are crafted from genuine vegetable-tanned leather, they gently contour and stretch to your feet after 1–2 wears.
            </p>
          </div>

          {/* WhatsApp Assistance */}
          <div className="mt-6 pt-4 border-t border-beige flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-brown-muted">
              Unsure about which size to pick?
            </span>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent('Namaste Toorva! I need help selecting the right size for my juttis.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#20ba5a] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ask Toorva Sizing Concierge</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

